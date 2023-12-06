import { Suspense } from 'react';
import Header from './header'
import { Boundary } from '@/components/boundary';

export default function Page() {
  async function someServerAction(formData: FormData) {
    'use server';

    console.log('formData!', formData);
  }

  return (
    <Boundary labels={['<form /> with child <Suspense />']} size='small'>
      <form action={someServerAction}>
        <Suspense fallback={<p>Loading...</p>}>
          <Header />
        </Suspense>
        <button type="submit">Submit</button>
      </form>
    </Boundary>
  );
}