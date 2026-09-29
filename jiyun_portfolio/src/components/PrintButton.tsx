'use client';
export default function PrintButton() { return <button className="button print-button" type="button" onClick={() => window.print()}>인쇄 / PDF 저장 ↗</button>; }
