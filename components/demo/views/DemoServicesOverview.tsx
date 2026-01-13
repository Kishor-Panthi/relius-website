'use client';

import { Music, Monitor, Coffee, Baby, Users, Video, Calendar, User } from 'lucide-react';
import { mockTeams } from '../data/mockData';
import type { TeamCategory } from '../types/demo.types';

const categoryConfig: Record<TeamCategory, { icon: React.ComponentType<{ className?: string }>; color: string; bg: string }> = {
  worship: { icon: Music, color: 'text-purple-600', bg: 'bg-purple-100' },
  tech: { icon: Monitor, color: 'text-blue-600', bg: 'bg-blue-100' },
  hospitality: { icon: Coffee, color: 'text-amber-600', bg: 'bg-amber-100' },
  children: { icon: Baby, color: 'text-pink-600', bg: 'bg-pink-100' },
  greeters: { icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
  production: { icon: Video, color: 'text-red-600', bg: 'bg-red-100' },
};

function TeamCard({
  name,
  category,
  members,
  nextServing,
  leader,
}: {
  name: string;
  category: TeamCategory;
  members: number;
  nextServing: string;
  leader: string;
}) {
  const config = categoryConfig[category] || categoryConfig.worship;
  const Icon = config.icon;

  return (
    <div className="demo-card p-5 transition-shadow">
      <div className="flex items-start gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${config.bg} ${config.color}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <div className="mt-2 space-y-1.5">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <User className="h-4 w-4 text-gray-400" />
              <span>Led by {leader}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="h-4 w-4 text-gray-400" />
              <span>{members} members</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span>Next: {nextServing}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DemoServicesOverview() {
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Service Teams</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your worship and service teams</p>
      </div>

      {/* Stats Bar */}
      <div className="demo-card p-4 mb-6 bg-[#fce7f3]/20 border-[#ec4899]/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">{mockTeams.length}</p>
            <p className="text-sm text-gray-500">Active Teams</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">71</p>
            <p className="text-sm text-gray-500">Total Volunteers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">92%</p>
            <p className="text-sm text-gray-500">Fill Rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">4</p>
            <p className="text-sm text-gray-500">This Sunday</p>
          </div>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockTeams.map((team) => (
          <TeamCard
            key={team.id}
            name={team.name}
            category={team.category}
            members={team.members}
            nextServing={team.nextServing}
            leader={team.leader}
          />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <button className="demo-btn demo-btn-secondary">
          <Calendar className="w-4 h-4 mr-2" />
          View Schedule
        </button>
        <button className="demo-btn demo-btn-secondary">
          <Users className="w-4 h-4 mr-2" />
          Manage Roster
        </button>
      </div>
    </div>
  );
}
