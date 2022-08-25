import { FC } from 'react';

interface Props {
  variant?: 'big' | 'small';
}

export const EditIcon: FC<Props> = ({ variant = 'big' }) => {
  const size = variant === 'big' ? 18 : 10;

  return (
    <svg width={size} height={size} viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30.035 3.77212L27.2259 0.962748C25.9423 -0.320783 23.8541 -0.320723 22.5706 0.962748C21.3621 2.17132 2.90406 20.6308 1.67054 21.8643C1.53915 21.9957 1.45112 22.1703 1.41976 22.3411L0.0151921 29.9264C-0.0392395 30.2205 0.0544869 30.5226 0.265977 30.7341C0.477709 30.9458 0.779837 31.0394 1.07355 30.9849L8.65818 29.5802C8.83346 29.5475 9.00578 29.4586 9.13499 29.3293L30.035 8.42774C31.3215 7.14124 31.3217 5.0588 30.035 3.77212ZM2.04169 28.9582L2.89135 24.3697L6.62987 28.1085L2.04169 28.9582ZM8.49283 27.4027L3.59708 22.5066L21.4711 4.63122L26.3668 9.52733L8.49283 27.4027ZM28.7506 7.14336L27.6512 8.24295L22.7554 3.34684L23.8549 2.24725C24.4301 1.67193 25.3661 1.67187 25.9415 2.24725L28.7506 5.05662C29.3273 5.63332 29.3273 6.56659 28.7506 7.14336Z"
        fill="green"
      />
    </svg>
  );
};
