import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const tag = request.nextUrl.searchParams.get('tag');

  if (secret !== process.env.MEDIUM_API_REVALIDATION_TOKEN) {
    return Response.json({ message: 'Invalid secret' }, { status: 401 });
  }

  if (!tag) {
    return Response.json({ message: 'Missing tag param' }, { status: 400 });
  }

  revalidateTag(tag);

  return Response.json({ revalidated: true, now: Date.now() });
}
