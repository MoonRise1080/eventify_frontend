import React from 'react';

const StatsCard = ({ title, value, description, icon, trend }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: icon }} className="w-4 h-4 text-gray-400" />
      </div>
      
      <div className="text-2xl font-bold">{value}</div>
      
      {description && (
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      )}
      
      {trend && (
        <p className={`text-xs mt-1 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {trend.isPositive ? '+' : ''}{trend.value}% from last month
        </p>
      )}
    </div>
  );
};

export default StatsCard;