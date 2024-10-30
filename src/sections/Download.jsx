const Download = () => {
  return (
    <section>
      <Element
        name="download className="
        g7
        relative
        pb-32
        pt-24
        max-lg:pb-24
        mx-md:py-16
      >
        <div className="container">
          <div className="flex items-center">
            <div
              className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256
            max-md:flex-100"
            >
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>
              <p className="body-1 mb-10 max-w-md">
                Try it now for free on IOS, Android, PC, Web - whatever your
                flavour, we've got you covered.
              </p>

              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Download;