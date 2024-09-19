
"use client"
import React, { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';

type Props = {};

export default function Page({}: Props) {
  const { userId } = useAuth(); // Get the user ID from Clerk's auth hook
  const router = useRouter();
  if(!userId) router.push('/workflows') 

  // useEffect(() => {
  //   // If there is no user ID, navigate to '/workflows'
  //   if (!userId) {
  //     router.push('/workflows');
  //   }
  // }, [userId, router]);

  return <div>page</div>;
}
