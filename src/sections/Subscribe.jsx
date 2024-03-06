import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className="flex gap-10 items-center justify-between max-container max-lg:flex-col" id="contact-us">
      <h3 className="font-bold font-palanquin leading-[68px] text-4xl max-w-sm lg:max-w-md">Sign Up from <span className="text-rolex-green">Updates</span> & Newsletter</h3>
      <div className="flex gap-5 items-center p-2.5 max-sm:flex-col sm:border sm:border-slate-gray rounded-full w-full lg:max-w-[40%]">
        <input className="input" type="text" placeholder="subscribe@rolex.com" />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullwidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe