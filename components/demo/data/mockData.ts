import type { Person, Group, Team, KPIStat, Activity, DemoEvent } from '../types/demo.types';

export const mockPeople: Person[] = [
  { id: '1', firstName: 'Sarah', lastName: 'Johnson', name: 'Sarah Johnson', email: 'sarah.johnson@email.com', phone: '(555) 123-4567', role: 'member', joinDate: '2024-06-15' },
  { id: '2', firstName: 'Michael', lastName: 'Chen', name: 'Pastor Michael Chen', email: 'pastor.chen@gracechurch.org', phone: '(555) 234-5678', role: 'pastor', joinDate: '2019-01-10' },
  { id: '3', firstName: 'David', lastName: 'Kim', name: 'David Kim', email: 'david.kim@email.com', phone: '(555) 345-6789', role: 'volunteer', joinDate: '2023-03-22' },
  { id: '4', firstName: 'Emily', lastName: 'Rodriguez', name: 'Emily Rodriguez', email: 'emily.r@email.com', role: 'member', joinDate: '2024-01-08' },
  { id: '5', firstName: 'James', lastName: 'Wilson', name: 'James Wilson', email: 'james.w@email.com', phone: '(555) 456-7890', role: 'admin', joinDate: '2020-08-14' },
  { id: '6', firstName: 'Rachel', lastName: 'Adams', name: 'Rachel Adams', email: 'rachel.adams@email.com', phone: '(555) 567-8901', role: 'volunteer', joinDate: '2022-05-30' },
  { id: '7', firstName: 'Robert', lastName: 'Thompson', name: 'Robert Thompson', email: 'r.thompson@email.com', role: 'member', joinDate: '2023-09-12' },
  { id: '8', firstName: 'Maria', lastName: 'Santos', name: 'Maria Santos', email: 'maria.santos@email.com', phone: '(555) 678-9012', role: 'volunteer', joinDate: '2021-11-25' },
  { id: '9', firstName: 'Jason', lastName: 'Park', name: 'Jason Park', email: 'jason.park@email.com', phone: '(555) 789-0123', role: 'volunteer', joinDate: '2022-07-18' },
  { id: '10', firstName: 'Lisa', lastName: 'Martinez', name: 'Lisa Martinez', email: 'lisa.m@email.com', role: 'member', joinDate: '2024-02-28' },
  { id: '11', firstName: 'Tyler', lastName: 'Brown', name: 'Tyler Brown', email: 'tyler.brown@email.com', phone: '(555) 890-1234', role: 'member', joinDate: '2024-03-15' },
  { id: '12', firstName: 'Amanda', lastName: 'Lee', name: 'Amanda Lee', email: 'amanda.lee@email.com', role: 'member', joinDate: '2023-12-01' },
];

export const mockGroups: Group[] = [
  { id: '1', name: 'Young Adults Fellowship', type: 'small-group', leader: 'David Kim', members: 18, meetingTime: 'Wednesdays, 7:00 PM', location: 'Room 201', attendance: 82, growth: 8.5 },
  { id: '2', name: 'Worship Team', type: 'ministry', leader: 'Rachel Adams', members: 12, meetingTime: 'Sundays, 8:00 AM', location: 'Sanctuary', attendance: 95, growth: 3.2 },
  { id: '3', name: "Men's Bible Study", type: 'small-group', leader: 'Robert Thompson', members: 14, meetingTime: 'Saturdays, 7:30 AM', location: 'Fellowship Hall', attendance: 78, growth: 5.0 },
  { id: '4', name: "Women's Ministry", type: 'ministry', leader: 'Maria Santos', members: 24, meetingTime: 'Tuesdays, 10:00 AM', location: 'Room 105', attendance: 88, growth: 6.8 },
  { id: '5', name: 'Tech Team', type: 'volunteer', leader: 'Jason Park', members: 8, meetingTime: 'Sundays, 7:30 AM', location: 'Tech Booth', attendance: 92, growth: 2.1 },
  { id: '6', name: 'Marriage Enrichment', type: 'class', leader: 'Pastor Michael Chen', members: 16, meetingTime: 'Thursdays, 7:00 PM', location: 'Room 301', attendance: 85, growth: 4.5 },
  { id: '7', name: 'Hospitality Team', type: 'volunteer', leader: 'Lisa Martinez', members: 15, meetingTime: 'Sundays, 8:30 AM', location: 'Lobby', attendance: 90, growth: 7.2 },
  { id: '8', name: 'Youth Group', type: 'ministry', leader: 'Tyler Brown', members: 32, meetingTime: 'Fridays, 6:30 PM', location: 'Youth Center', attendance: 75, growth: 12.3 },
];

export const mockTeams: Team[] = [
  { id: '1', name: 'Worship Team', category: 'worship', members: 12, nextServing: 'Sunday, Jan 14', leader: 'Rachel Adams' },
  { id: '2', name: 'Tech Team', category: 'tech', members: 8, nextServing: 'Sunday, Jan 14', leader: 'Jason Park' },
  { id: '3', name: 'Hospitality', category: 'hospitality', members: 15, nextServing: 'Sunday, Jan 14', leader: 'Maria Santos' },
  { id: '4', name: "Children's Ministry", category: 'children', members: 20, nextServing: 'Sunday, Jan 14', leader: 'Amanda Lee' },
  { id: '5', name: 'Greeters', category: 'greeters', members: 10, nextServing: 'Sunday, Jan 14', leader: 'Robert Thompson' },
  { id: '6', name: 'Production Team', category: 'production', members: 6, nextServing: 'Sunday, Jan 14', leader: 'David Kim' },
];

export const mockDashboardKPIs: KPIStat[] = [
  { title: 'Monthly Giving', value: '$24,850', change: '+12.3%', trend: 'up' },
  { title: 'New Visitors', value: '23', change: '+8.2%', trend: 'up' },
  { title: 'Upcoming Events', value: '8', change: null, trend: null },
  { title: 'Total Members', value: '486', change: '+3.1%', trend: 'up' },
];

export const mockRecentActivity: Activity[] = [
  { id: '1', type: 'new_member', title: 'Emma Wilson joined', subtitle: 'New member registration', time: '2 hours ago' },
  { id: '2', type: 'donation', title: 'Anonymous donated $250', subtitle: 'General Fund', time: '4 hours ago' },
  { id: '3', type: 'event_rsvp', title: 'Youth Retreat', subtitle: '12 new RSVPs', time: 'Yesterday' },
  { id: '4', type: 'check_in', title: 'Sunday Service', subtitle: '186 check-ins', time: 'Sunday' },
  { id: '5', type: 'group_join', title: 'Tyler Brown joined', subtitle: 'Young Adults Fellowship', time: '2 days ago' },
];

// Additional people to add when "Add Person" is clicked
export const additionalPeople: Person[] = [
  { id: 'new-1', firstName: 'Kevin', lastName: 'Wright', name: 'Kevin Wright', email: 'kevin.w@email.com', phone: '(555) 901-2345', role: 'member', joinDate: '2024-01-10' },
  { id: 'new-2', firstName: 'Jennifer', lastName: 'Taylor', name: 'Jennifer Taylor', email: 'jen.taylor@email.com', role: 'volunteer', joinDate: '2024-01-11' },
  { id: 'new-3', firstName: 'Marcus', lastName: 'Johnson', name: 'Marcus Johnson', email: 'marcus.j@email.com', phone: '(555) 012-3456', role: 'member', joinDate: '2024-01-12' },
  { id: 'new-4', firstName: 'Sophia', lastName: 'Garcia', name: 'Sophia Garcia', email: 'sophia.g@email.com', role: 'member', joinDate: '2024-01-13' },
  { id: 'new-5', firstName: 'Daniel', lastName: 'Anderson', name: 'Daniel Anderson', email: 'dan.anderson@email.com', phone: '(555) 123-4567', role: 'volunteer', joinDate: '2024-01-14' },
];

// Additional groups to add when "Create Group" is clicked
export const additionalGroups: Group[] = [
  { id: 'new-1', name: 'Prayer Warriors', type: 'ministry', leader: 'Sarah Johnson', members: 8, meetingTime: 'Mondays, 6:00 AM', location: 'Chapel', attendance: 90, growth: 5.0 },
  { id: 'new-2', name: 'Senior Fellowship', type: 'small-group', leader: 'James Wilson', members: 12, meetingTime: 'Thursdays, 2:00 PM', location: 'Room 102', attendance: 85, growth: 3.5 },
  { id: 'new-3', name: 'New Believers Class', type: 'class', leader: 'Pastor Michael Chen', members: 10, meetingTime: 'Sundays, 11:00 AM', location: 'Room 204', attendance: 88, growth: 15.0 },
  { id: 'new-4', name: 'Parking Team', type: 'volunteer', leader: 'Kevin Wright', members: 6, meetingTime: 'Sundays, 8:00 AM', location: 'Parking Lot', attendance: 95, growth: 8.0 },
  { id: 'new-5', name: 'Creative Arts', type: 'ministry', leader: 'Emily Rodriguez', members: 14, meetingTime: 'Saturdays, 10:00 AM', location: 'Art Studio', attendance: 82, growth: 10.5 },
];

export const groupTypeLabels: Record<string, string> = {
  'small-group': 'Small Group',
  ministry: 'Ministry',
  volunteer: 'Volunteer Team',
  class: 'Class',
};

export const groupTypeColors: Record<string, string> = {
  'small-group': 'bg-sky-100 text-sky-700',
  ministry: 'bg-purple-100 text-purple-700',
  volunteer: 'bg-pink-100 text-pink-700',
  class: 'bg-amber-100 text-amber-700',
};

export const roleColors: Record<string, string> = {
  admin: 'bg-red-100 text-red-700',
  pastor: 'bg-purple-100 text-purple-700',
  volunteer: 'bg-blue-100 text-blue-700',
  member: 'bg-gray-100 text-gray-700',
};

export const mockEvents: DemoEvent[] = [
  { id: '1', title: 'Sunday Worship Service', date: '2026-01-18', time: '9:00 AM', location: 'Main Sanctuary', category: 'worship', attendees: 180 },
  { id: '2', title: 'Youth Group Meeting', date: '2026-01-19', time: '6:30 PM', location: 'Youth Center', category: 'meeting', attendees: 35 },
  { id: '3', title: 'Bible Study: Gospel of John', date: '2026-01-20', time: '7:00 PM', location: 'Room 201', category: 'class', attendees: 22 },
  { id: '4', title: 'Community Potluck', date: '2026-01-22', time: '5:00 PM', location: 'Fellowship Hall', category: 'social', attendees: 65 },
  { id: '5', title: 'Prayer Breakfast', date: '2026-01-25', time: '7:00 AM', location: 'Café', category: 'meeting', attendees: 18 },
  { id: '6', title: 'Worship Night', date: '2026-01-26', time: '7:00 PM', location: 'Main Sanctuary', category: 'worship', attendees: 120 },
];

export const eventCategoryColors: Record<string, string> = {
  worship: 'bg-purple-100 text-purple-700',
  meeting: 'bg-blue-100 text-blue-700',
  class: 'bg-amber-100 text-amber-700',
  social: 'bg-green-100 text-green-700',
};

export const eventCategoryLabels: Record<string, string> = {
  worship: 'Worship',
  meeting: 'Meeting',
  class: 'Class',
  social: 'Social',
};
