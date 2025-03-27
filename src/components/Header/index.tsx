const Header = () => {
  return (
    <header>
      {/* top banner */}
      <div
        className={'bg-header-banner text-white my-container text-center !py-2'}
      >
        <p className='text-lg font-bold'>
          🎉 To celebrate Spense's launch, we will be waiving all fees for the
          month of April.{' '}
          <span className={'font-semibold underline'}>
            You will be receiving 100% of the earnings.
          </span>{' '}
          🎉
        </p>
      </div>
    </header>
  )
}
export default Header
