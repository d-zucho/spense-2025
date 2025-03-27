import TextEditor from '@/Assets/TextEditor.png'
import { ArrowRight } from 'lucide-react'

const EditorPreview = () => {
  return (
    <div className='my-container flex flex-col lg:flex-row items-center lg:justify-between gap-8'>
      {/* LEFT -- IMAGE */}
      <div className='object-contain max-lg:order-2 flex-1'>
        <img src={TextEditor} alt='Text Editor' />
      </div>

      {/* RIGHT -- TEXT */}
      <div className='flex-1'>
        <h2 className='text-4xl'>A text editor like no other.</h2>
        <p className='text-muted-text mt-2 text-lg'>
          Our text editor pulls you into focus mode with it’s simplistic design
          and usability so you can put out your best writings.
        </p>
        <div className='flex gap-2 items-center mt-4 text-muted-text border-b-1 w-fit border-muted-text hover:cursor-pointer'>
          Text Editor Live Preview
          <span>
            <ArrowRight size={24} className='inline-block' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default EditorPreview
