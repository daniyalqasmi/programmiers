const BannerContent = () => {
  return (
    <article className="flex w-full flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center">
        <h1 className="flex flex-col items-center justify-center text-xl font-bold text-[#f6c263] sm:text-4xl md:text-5xl">
          Welcome to Programmiers
        </h1>
      </section>
      <p className="mt-4 flex flex-col items-center justify-center px-14 text-center text-xs text-secondary-50 sm:text-base md:mt-8 md:p-0 md:text-xl">
        <span>
          Where aspirations are translated into code and dreams materialize
          before your eyes!
        </span>
        <span>Talent flourishes and innovation knows no limits!</span>
      </p>
    </article>
  )
}

export default BannerContent
