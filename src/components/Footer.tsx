const Footer = () => {
  return (
    <footer className='bg-black text'>
      <div className='my-container flex flex-col lg:flex-row justify-between gap-12'>
        <div className='flex flex-col sm:flex-row gap-12'>
          <div>
            <h3 className='mb-3'>spite.</h3>
            <p>
              Spense is an open platform for individuals to share their
              unfiltered thoughts. Discuss the topics you love, and get paid for
              doing just that.
            </p>
          </div>
          <div>
            <h3>Company</h3>
            <div className='flex flex-col gap-4'>
              <p>About</p>
              <p>Customers</p>
              <p>Blog</p>
            </div>
          </div>

          <div>
            <h3>Sitemap</h3>
            <p>Homepage</p>
          </div>
        </div>

        <div className='flex flex-col md:flex gap-12 md:flex-row'>
          <div>
            <h3>Opportunities</h3>
            <p>Jobs</p>
          </div>
          <div>
            <h3>Resources</h3>
            <p>Support</p>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
