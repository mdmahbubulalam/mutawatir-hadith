import { FaSpinner } from 'react-icons/fa';
const loading = () => {
  return (
    <section className='h-screen flex items-center justify-center text-5xl'>
        <FaSpinner className='animate-spin'/>
    </section>
  )
}

export default loading