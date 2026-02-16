'use client';

import { useState } from 'react';
// import { Abilities } from '../assets/Abilities';
// import { Charactors } from '../assets/Charactors';
import AbilityList from './AbilityList';
import AbilitySelector from './AbilitySelector';

export default function Simulator() {
  return (
    <div>
      <AbilitySelector charactorId='kain' />
      <AbilityList charactorId='cecil' />
    </div>
  );
}