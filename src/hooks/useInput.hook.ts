import React, { useState } from 'react';

export const useInput = (initialValue: string) => {
  const [val, setVal] = useState(initialValue);

  return [
    val,
    { value: val, onChangeText: (newText: string) => setVal(newText) }, //hook actions
    () => setVal(initialValue) // hook reset
  ] as const;
}