export type Brand<K, T> = K & { __brand: T };
type MajorCreditsType = Brand<number, 'MajorCredits.credits'>;
type MinorCreditsType = Brand<number, 'MinorCredits.credits'>;

export interface MajorCredits {
  credits: MajorCreditsType;
}

export interface MinorCredits {
  credits: MinorCreditsType;
}

export function addMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function addMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
