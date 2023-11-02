interface Props {
  params: { slug: string }
  searchParams: { [key: string]: string }
}

export default async function Recipe(props: Props) {
  console.log(props)

  return <div>recipe</div>
}
