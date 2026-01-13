'use client';

import { Plus, Users, User, Activity, MapPin, CalendarClock, Filter } from 'lucide-react';
import { groupTypeLabels, groupTypeColors } from '../data/mockData';
import type { Group, GroupType } from '../types/demo.types';

interface DemoGroupsDirectoryProps {
  groups: Group[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  typeFilter: GroupType | 'all';
  onTypeFilterChange: (type: GroupType | 'all') => void;
  onAddGroup: () => void;
  canAddMore: boolean;
}

function KPICard({
  title,
  value,
  icon: Icon,
  trend,
}: {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  trend: string;
}) {
  return (
    <div className="demo-card p-4">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dcfce7] text-[#22c55e]">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-xs font-medium text-green-600">{trend}</span>
      </div>
      <div className="mt-3">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
}

function GroupCard({ group }: { group: Group }) {
  const typeColor = groupTypeColors[group.type] || 'bg-gray-100 text-gray-700';
  const typeLabel = groupTypeLabels[group.type] || group.type;

  return (
    <div className="demo-card transition-shadow">
      <div className="p-5 pb-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{group.name}</h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
              <Users className="h-4 w-4 text-[#22c55e]" />
              Led by {group.leader}
            </div>
          </div>
          <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${typeColor}`}>
            {typeLabel}
          </span>
        </div>
      </div>

      <div className="px-5 pb-4 space-y-3">
        <div className="grid gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CalendarClock className="h-4 w-4 text-[#22c55e]" />
            {group.meetingTime}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#22c55e]" />
            {group.location}
          </div>
        </div>

        <div className="rounded-lg bg-[#dcfce7]/40 p-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-medium text-gray-700">
            <span>Members: {group.members}</span>
            <span>Attendance: {group.attendance}%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-white/70">
            <div
              className="h-full rounded-full bg-[#22c55e] transition-all"
              style={{ width: `${group.attendance}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-[#22c55e]">
            {group.growth >= 0 ? '+' : ''}{group.growth}% growth month-over-month
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button className="demo-btn demo-btn-ghost text-[#22c55e] text-sm px-3 py-1.5">
            View Details
          </button>
          <button className="demo-btn demo-btn-secondary text-sm px-3 py-1.5">
            Manage
          </button>
        </div>
      </div>
    </div>
  );
}

export function DemoGroupsDirectory({
  groups,
  searchQuery,
  onSearchChange,
  typeFilter,
  onTypeFilterChange,
  onAddGroup,
  canAddMore,
}: DemoGroupsDirectoryProps) {
  const kpis = [
    { title: 'Total Groups', value: String(groups.length + 56), icon: Users, trend: '+6.4%' },
    { title: 'Active Members', value: '1,248', icon: User, trend: '+3.1%' },
    { title: 'Avg. Attendance', value: '86%', icon: Activity, trend: '+2.8%' },
    { title: 'Growth Rate', value: '9.4%', icon: Plus, trend: '+1.2%' },
  ];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Groups Directory</h1>
          <p className="text-sm text-gray-500 mt-1">Discover small groups, ministry teams, and classes across the church.</p>
        </div>
        <button
          onClick={onAddGroup}
          disabled={!canAddMore}
          className={`demo-btn demo-btn-primary ${!canAddMore ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Group
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>

      {/* Filters */}
      <div className="demo-card p-4 mb-6 border-[#22c55e]/20 bg-[#dcfce7]/20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Search */}
          <div className="sm:col-span-2">
            <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">Search</label>
            <input
              type="text"
              placeholder="Search by group or leader name"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="demo-input pl-3 w-full"
            />
          </div>
          {/* Group Type */}
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">Group Type</label>
            <div className="relative">
              <select
                value={typeFilter}
                onChange={(e) => onTypeFilterChange(e.target.value as GroupType | 'all')}
                className="demo-input w-full pr-10 appearance-none"
              >
                <option value="all">All Types</option>
                <option value="small-group">Small Groups</option>
                <option value="ministry">Ministry Teams</option>
                <option value="volunteer">Volunteer</option>
                <option value="class">Classes</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          {/* Attendance */}
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">Attendance</label>
            <select className="demo-input w-full appearance-none" disabled>
              <option>All Attendance</option>
              <option>90% or higher</option>
              <option>80% - 89%</option>
              <option>Below 80%</option>
            </select>
          </div>
        </div>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>

      {groups.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No groups found matching your criteria.</p>
        </div>
      )}

      {/* Results count */}
      <div className="mt-6 text-sm text-gray-500 text-center">
        Showing {groups.length} {groups.length === 1 ? 'group' : 'groups'}
      </div>
    </div>
  );
}
