import React, { useMemo, useState } from "react";
import {
    TIMELINE_EVENTS,
    TimelineEvent,
    TimelineEventType,
    TYPE_LABEL,
    toMonths,
    formatYm,
    formatPeriod,
    formatDuration,
    currentYm,
} from "../../../data/timelineEvents";
import * as S from "../../../styles/about/gamification.styles";

interface PlacedEvent {
    event: TimelineEvent;
    lane: number;
    left: number; // %
    width: number; // %
}

/** 막대가 오른쪽 끝에 가까우면 라벨을 오른쪽 정렬해 잘림을 막는다 */
const RIGHT_ALIGN_THRESHOLD = 58;

function buildLayout() {
    const events = [...TIMELINE_EVENTS].sort(
        (a, b) => toMonths(a.start) - toMonths(b.start)
    );

    const nowYm = currentYm();
    const nowMonths = toMonths(nowYm);

    // 축 시작: 가장 이른 이벤트가 속한 연도의 1월
    const firstYear = Math.floor(toMonths(events[0].start) / 12);
    const domainStart = firstYear * 12;
    // 축 끝: 이번 달 (이벤트가 더 뒤까지 이어지면 그쪽에 맞춤)
    const lastEventEnd = Math.max(
        ...events.map((e) => toMonths(e.end ?? e.start))
    );
    const domainEnd = Math.max(nowMonths, lastEventEnd);
    const span = Math.max(1, domainEnd - domainStart);

    const pct = (months: number) => ((months - domainStart) / span) * 100;

    // 한국어 라벨이 막대보다 훨씬 길어 압축 배치 시 겹친다.
    // 이벤트마다 한 행을 주어 항상 읽히도록 한다.
    const lanes: PlacedEvent[] = events.map((event, index) => {
        const startM = toMonths(event.start);
        const endM = event.end ? toMonths(event.end) : startM;
        return {
            event,
            lane: index,
            left: pct(startM),
            width: Math.max(pct(endM) - pct(startM), 0),
        };
    });

    const nowPct = pct(nowMonths);

    const yearTicks: { year: number; pct: number }[] = [];
    for (let y = firstYear; y <= Math.floor(domainEnd / 12); y += 1) {
        const tickPct = pct(y * 12);
        // '현재' 배지와 겹치는 연도 눈금은 생략
        if (Math.abs(tickPct - nowPct) < 5) continue;
        yearTicks.push({ year: y, pct: tickPct });
    }

    return {
        lanes,
        laneCount: lanes.length,
        yearTicks,
        nowPct,
        nowLabel: formatYm(nowYm),
    };
}

export default function TimelineChart() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const { lanes, laneCount, yearTicks, nowPct, nowLabel } = useMemo(
        buildLayout,
        []
    );

    const bodyHeight = laneCount * S.LANE_HEIGHT;
    const active = lanes.find((l) => l.event.id === activeId) ?? null;

    const usedTypes = Array.from(
        new Map(
            lanes.map((l) => [TYPE_LABEL[l.event.type], l.event.type])
        ).values()
    ) as TimelineEventType[];

    // 위쪽 행은 툴팁을 아래로, 아래쪽 행은 위로 띄운다
    const tooltipBelow = active ? active.lane < laneCount / 2 : false;

    return (
        <>
            <S.Legend>
                {usedTypes.map((type) => (
                    <S.LegendItem key={type} $type={type}>
                        <S.LegendSwatch $type={type} />
                        {TYPE_LABEL[type]}
                    </S.LegendItem>
                ))}
            </S.Legend>

            <S.ChartScroll>
                <S.ChartWrapper>
                    <S.ChartBody style={{ height: bodyHeight }}>
                        {yearTicks.map((tick) => (
                            <S.GridLine
                                key={tick.year}
                                style={{ left: `${tick.pct}%` }}
                                aria-hidden="true"
                            />
                        ))}
                        <S.NowLine
                            style={{ left: `${nowPct}%` }}
                            aria-hidden="true"
                        />

                        {lanes.map(({ event, lane, left, width }) => {
                            const isActive = event.id === activeId;
                            const show = () => setActiveId(event.id);
                            const hide = () => setActiveId(null);
                            const alignRight = left > RIGHT_ALIGN_THRESHOLD;

                            return (
                                <S.BarRow
                                    key={event.id}
                                    style={{ top: lane * S.LANE_HEIGHT }}
                                >
                                    <S.BarLabel
                                        style={
                                            alignRight
                                                ? {
                                                      right: `${
                                                          100 - (left + width)
                                                      }%`,
                                                  }
                                                : { left: `${left}%` }
                                        }
                                    >
                                        <S.LabelChip $type={event.type}>
                                            {event.icon}
                                        </S.LabelChip>
                                        {event.title}
                                        <S.LabelPeriod>
                                            {formatPeriod(event)}
                                        </S.LabelPeriod>
                                    </S.BarLabel>

                                    {event.end ? (
                                        <S.Bar
                                            type="button"
                                            $type={event.type}
                                            $active={isActive}
                                            style={{
                                                left: `${left}%`,
                                                width: `${width}%`,
                                            }}
                                            onMouseEnter={show}
                                            onMouseLeave={hide}
                                            onFocus={show}
                                            onBlur={hide}
                                            aria-label={`${
                                                event.title
                                            }, ${formatPeriod(event)}`}
                                        />
                                    ) : (
                                        <S.PointMarker
                                            type="button"
                                            $type={event.type}
                                            $active={isActive}
                                            style={{ left: `${left}%` }}
                                            onMouseEnter={show}
                                            onMouseLeave={hide}
                                            onFocus={show}
                                            onBlur={hide}
                                            aria-label={`${
                                                event.title
                                            }, ${formatPeriod(event)}`}
                                        />
                                    )}
                                </S.BarRow>
                            );
                        })}

                        {active && (
                            <S.Tooltip
                                role="tooltip"
                                $below={tooltipBelow}
                                style={{
                                    left: `${Math.min(
                                        Math.max(
                                            active.left + active.width / 2,
                                            22
                                        ),
                                        78
                                    )}%`,
                                    top: tooltipBelow
                                        ? active.lane * S.LANE_HEIGHT +
                                          S.LANE_HEIGHT - 4
                                        : active.lane * S.LANE_HEIGHT - 4,
                                }}
                            >
                                <S.TooltipHead>
                                    <S.TypeBadge $type={active.event.type}>
                                        {TYPE_LABEL[active.event.type]}
                                    </S.TypeBadge>
                                    <S.TooltipPeriod>
                                        {formatPeriod(active.event)}
                                        {formatDuration(active.event)
                                            ? ` · ${formatDuration(
                                                  active.event
                                              )}`
                                            : ""}
                                    </S.TooltipPeriod>
                                </S.TooltipHead>
                                <S.TooltipTitle>
                                    {active.event.title}
                                </S.TooltipTitle>
                                <S.TooltipSubtitle>
                                    {active.event.subtitle}
                                </S.TooltipSubtitle>
                                <S.TooltipDescription>
                                    {active.event.description}
                                </S.TooltipDescription>
                                <S.TagList>
                                    {(active.event.tags ?? []).map((tag) => (
                                        <S.Tag key={tag}>{tag}</S.Tag>
                                    ))}
                                </S.TagList>
                            </S.Tooltip>
                        )}
                    </S.ChartBody>

                    <S.Axis>
                        {yearTicks.map((tick) => (
                            <S.AxisTick
                                key={tick.year}
                                style={{ left: `${tick.pct}%` }}
                            >
                                {tick.year}
                            </S.AxisTick>
                        ))}
                        <S.NowTick style={{ left: `${nowPct}%` }}>
                            {nowLabel}
                        </S.NowTick>
                    </S.Axis>
                </S.ChartWrapper>
            </S.ChartScroll>

            <S.HelpText>
                막대에 커서를 올리면 상세 내용이 표시됩니다.
            </S.HelpText>
        </>
    );
}
