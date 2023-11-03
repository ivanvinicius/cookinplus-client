type Props = { title: string }

export function FeaturedTitle({ title }: Props) {
  return (
    <div className="flex items-center gap-2">
      <hr className="h-[2px] w-8 rounded-full border-0 bg-ruby-500" />
      <span className="font-cookie text-3xl leading-normal text-ruby-500 lg:text-4xl lg:leading-none">
        {title}
      </span>
    </div>
  )
}
