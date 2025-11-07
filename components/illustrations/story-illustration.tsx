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
import type { StoryIllustrationKey } from "@/data/stories";

const illustrationMap: Record<StoryIllustrationKey, ComponentType<IllustrationProps>> = {
  community: CommunityConnectionIllustration,
  ministry: MinistryMomentsIllustration,
  volunteer: VolunteerCoordinationIllustration,
  worship: WorshipCelebrationIllustration,
  growth: GrowthPlanningIllustration,
  care: CareSupportIllustration,
};

export function StoryIllustration({ type, ...rest }: IllustrationProps & { type: StoryIllustrationKey }) {
  const Illustration = illustrationMap[type];
  return <Illustration {...rest} />;
}

export function getStoryIllustration(type: StoryIllustrationKey) {
  return illustrationMap[type];
}
