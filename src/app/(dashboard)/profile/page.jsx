import CardWrapper from './ـ/components/CardWrapper';
import { Suspense } from 'react';
import Fallback from '@/components/ui/Fallback';

async function Profile() {
  return (
    <div>
      <h1 className="text-xl mb-8 text-secondary-500">داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <CardWrapper />
      </Suspense>
    </div>
  );
}
export default Profile;
