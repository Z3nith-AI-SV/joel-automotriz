import {PrismaClient} from '@/lib/generated/prisma/client'
import {PrismaPg} from '@prisma/adapter-pg';
import {Pool} from 'pg';
const conexion = process.env.db!;

const prismaGlobal  = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

function CreatePrismaClient(){
    const pool = new Pool({connectionString: conexion});
    const adaptador = new PrismaPg(pool);
    return new PrismaClient({adapter: adaptador});
}

export const prisma = prismaGlobal.prisma ?? CreatePrismaClient();

if (process.env.NODE_ENV !== 'production') {
    prismaGlobal.prisma = prisma;
}