import  {prisma} from '@/lib/db/prisma'

export default async function page() {
    const cursos = await prisma.cursos.findMany();

    return (
      <>
          {cursos.length > 0 ? (
              cursos.map(curso => (
                      <li key={curso.cod_curso}> {curso.titulo}</li>
              ))
          ):(
              <li>NO HAY CURSOS AGREGADOS</li>
          )}

      </>
    );
}