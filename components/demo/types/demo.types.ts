export type DemoView = 'dashboard' | 'people' | 'groups' | 'services' | 'events';

export type PersonRole = 'admin' | 'pastor' | 'volunteer' | 'member';

export type GroupType = 'small-group' | 'ministry' | 'volunteer' | 'class';

export type TeamCategory = 'worship' | 'tech' | 'hospitality' | 'children' | 'greeters' | 'production';

export type EventCategory = 'worship' | 'meeting' | 'class' | 'social';

export interface DemoEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  attendees: number;
}

export interface Person {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  role: PersonRole;
  joinDate: string;
}

export interface Group {
  id: string;
  name: string;
  type: GroupType;
  leader: string;
  members: number;
  meetingTime: string;
  location: string;
  attendance: number;
  growth: number;
}

export interface Team {
  id: string;
  name: string;
  category: TeamCategory;
  members: number;
  nextServing: string;
  leader: string;
}

export interface KPIStat {
  title: string;
  value: string;
  change: string | null;
  trend: 'up' | 'down' | null;
}

export interface Activity {
  id: string;
  type: 'new_member' | 'donation' | 'event_rsvp' | 'check_in' | 'group_join';
  title: string;
  subtitle?: string;
  time: string;
}

export interface DemoState {
  currentView: DemoView;
  isMobileMenuOpen: boolean;
  searchQuery: string;
  peopleRoleFilter: PersonRole | 'all';
  groupTypeFilter: GroupType | 'all';
  people: Person[];
  groups: Group[];
  addedPeopleCount: number;
  addedGroupsCount: number;
}

export type DemoAction =
  | { type: 'SET_VIEW'; payload: DemoView }
  | { type: 'TOGGLE_MOBILE_MENU' }
  | { type: 'CLOSE_MOBILE_MENU' }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_PEOPLE_ROLE_FILTER'; payload: PersonRole | 'all' }
  | { type: 'SET_GROUP_TYPE_FILTER'; payload: GroupType | 'all' }
  | { type: 'ADD_PERSON'; payload: Person }
  | { type: 'ADD_GROUP'; payload: Group };

export interface NavItem {
  id: string;
  name: string;
  href?: DemoView;
  icon: string;
  color?: string;
  badge?: string;
  isVisualOnly?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
  defaultExpanded?: boolean;
  isVisualOnly?: boolean;
}
