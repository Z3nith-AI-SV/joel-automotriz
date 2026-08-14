import {prisma} from '@/lib/db/prisma';
import {parseAppRouteSegment} from "next/dist/shared/lib/router/routes/app";

export async function GetTodos()
{
    const registros = await  prisma.cursos.findMany();
    return Response.json(registros);
}