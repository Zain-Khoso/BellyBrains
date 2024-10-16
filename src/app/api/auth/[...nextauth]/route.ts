// Lib Imports.
import NextAuth from 'next-auth';

// Local Imports.
import { authOptions } from '@/utils/nextAuthOptions';

const handlers = NextAuth(authOptions);

export { handlers as GET, handlers as POST };
