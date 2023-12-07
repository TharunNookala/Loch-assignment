import { FiBell, FiBarChart2 } from 'react-icons/fi';
import { BsClock } from 'react-icons/bs';

const Notifications = () => {

  return (
    <div className="divs-container overflow-hidden">
      <div className="divs-slide animate-marquee infinite flex space-x-4">
        <div className="bg-gray-100 rounded-md px-2 py-2 space-y-3 font-medium min-w-[200px] h-44">
          <div className="flex items-center justify-between">
            <FiBell size={23} />
            <button className="px-2">Save</button>
          </div>
          <p className="sm:max-w-[129px] text-sm">We'll be sending notifications to you here</p>
          <input type="email"  className="px-2 py-2 rounded-md border text-sm"  />
        </div>

        <div className="bg-gray-100 rounded-md px-2 py-2 space-y-3 font-medium min-w-[200px] h-44">
          <div className="flex items-center justify-between">
            <FiBarChart2 size={23} />
            <input type="checkbox" className="px-2" />
          </div>
          <p className="sm:max-w-[129px] text-sm">Notify me when any wallets move more than</p>
          <select className="bg-gray-200 rounded">
            <option value="1000">$1,000.00</option>
            <option value="2000">$2,000.00</option>
            <option value="3000">$3,000.00</option>
          </select>
        </div>

        <div className="bg-gray-100 rounded-md px-2 py-2 space-y-3 font-medium min-w-[200px] h-44">
          <div className="flex items-center justify-between">
            <BsClock size={23} />
            <input type="checkbox" className="px-2" />
          </div>
          <p className="sm:max-w-[129px] text-sm">Notify me when any wallet dormant for
            <select className="bg-gray-200 my-3 rounded">
              <option value="1000">$1,000.00</option>
              <option value="2000">$2,000.00</option>
              <option value="3000">$3,000.00</option>
            </select>
            becomes active
          </p>
        </div>

        <div className="bg-gray-100 rounded-md px-2 py-2 space-y-3 font-medium min-w-[200px] h-44">
          <div className="flex items-center justify-between">
            <FiBell size={23} />
            <button className="px-2">Save</button>
          </div>
          <p className="sm:max-w-[129px] text-sm">We'll be sending notifications to you here</p>
          <input type="email"  className="px-2 py-2 rounded-md border text-sm"  />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
