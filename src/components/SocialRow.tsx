const SOCIAL_ICONS: { label: string; icon: string }[] = [
  {
    label: 'Facebook',
    icon: '/src/Assets/Facebook Logo.png',
  },
  {
    label: 'Dribbble',
    icon: '/src/Assets/Dribbble Logo.png',
  },
  {
    label: 'Youtube',
    icon: '/src/Assets/Youtube Logo.png',
  },
  {
    label: 'Pinterest',
    icon: '/src/Assets/Pinterest Logo.png',
  },
  {
    label: 'Twitter',
    icon: '/src/Assets/Twitter Logo.png',
  },
  {
    label: 'Reddit',
    icon: '/src/Assets/Reddit Logo.png',
  },
  {
    label: 'Google',
    icon: '/src/Assets/Google Logo.png',
  },
  {
    label: 'Slack',
    icon: '/src/Assets/Slack Logo.png',
  },
]

const SocialRow = () => {
  return (
    <section className='bg-white'>
      <div className='my-container'>
        <div className='flex gap-8 flex-wrap items-center justify-center'>
          {SOCIAL_ICONS.map((icon) => (
            <img
              src={icon.icon}
              alt={icon.label}
              width={100}
              className='aspect-auto'
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialRow
