import type { ComponentType } from "react";
import {
  CareSupportIllustration,
  CommunityConnectionIllustration,
  GrowthPlanningIllustration,
  MinistryMomentsIllustration,
  VolunteerCoordinationIllustration,
  WorshipCelebrationIllustration,
} from ".";
import type { IllustrationProps } from "./palette";
import type { UseCaseIllustrationKey } from "@/data/use-cases";

const illustrationMap: Record<UseCaseIllustrationKey, ComponentType<IllustrationProps>> = {
  community: CommunityConnectionIllustration,
  ministry: MinistryMomentsIllustration,
  volunteer: VolunteerCoordinationIllustration,
  worship: WorshipCelebrationIllustration,
  growth: GrowthPlanningIllustration,
  care: CareSupportIllustration,
};

export function UseCaseIllustration({ type, ...rest }: IllustrationProps & { type: UseCaseIllustrationKey }) {
  const Illustration = illustrationMap[type];
  return <Illustration {...rest} />;
}

export function getUseCaseIllustration(type: UseCaseIllustrationKey) {
  return illustrationMap[type];
}

// Keep old names for backwards compatibility during migration
export const StoryIllustration = UseCaseIllustration;
export const getStoryIllustration = getUseCaseIllustration;
