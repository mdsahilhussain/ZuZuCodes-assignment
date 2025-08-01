import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function CN(...inputs) {
  return twMerge(clsx(inputs));
}