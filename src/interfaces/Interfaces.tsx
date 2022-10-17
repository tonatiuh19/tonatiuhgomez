export interface Apple {
  x: number;
  y: number;
}

export interface Velocity {
  dx: number;
  dy: number;
}

export interface Button {
  children?: React.ReactNode;
  onClick: () => void;
}

export interface KeyboardButtons {
  onClickUp: () => void;
  onClickLeft: () => void;
  onClickDown: () => void;
  onClickRight: () => void;
}
