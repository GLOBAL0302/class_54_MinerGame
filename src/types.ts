import React from 'react';

export interface ICard extends React.PropsWithChildren{
  hasItem:boolean
  clicked:boolean
}