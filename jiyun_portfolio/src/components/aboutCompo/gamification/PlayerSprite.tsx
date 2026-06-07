import React from 'react';
import { PlayerWrapper, PixelCharacter } from '../../../styles/about/gamification.styles';

interface Props {
  position: number;
  isMoving: boolean;
}

export default function PlayerSprite({ position, isMoving }: Props) {
  return (
    <PlayerWrapper
      $position={position}
      $isMoving={isMoving}
      aria-hidden="true"
    >
      <PixelCharacter />
    </PlayerWrapper>
  );
}
