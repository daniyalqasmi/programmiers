import { TitleProps } from './type'

function Title({ text }: TitleProps) {
  return (
    <h1 className="mb-8 inline-block border border-transparent border-b-[#f6c263] font-bold uppercase text-secondary">
      {text}
    </h1>
  )
}

export default Title
