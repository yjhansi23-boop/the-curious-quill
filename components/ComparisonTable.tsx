
import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { CourierService } from '../types';

interface ComparisonTableProps {
  services: CourierService[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ services }) => {
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <StarIcon
                key={i}
                className={`h-5 w-5 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            />
        ));
    };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">Service</th>
            <th scope="col" className="px-6 py-3">Rating</th>
            <th scope="col" className="px-6 py-3">Speed</th>
            <th scope="col" className="px-6 py-3">Cost</th>
            <th scope="col" className="px-6 py-3">Best For</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.name} className="bg-white border-b hover:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">
                {service.name}
              </th>
              <td className="px-6 py-4">
                <div className="flex items-center">{renderStars(service.rating)}</div>
              </td>
              <td className="px-6 py-4">{service.speed}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    service.cost === 'Premium' ? 'bg-red-100 text-red-800' :
                    service.cost === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                }`}>
                    {service.cost}
                </span>
              </td>
              <td className="px-6 py-4">{service.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
