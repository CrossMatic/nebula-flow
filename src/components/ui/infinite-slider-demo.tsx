import { InfiniteSlider } from '@/components/ui/infinite-slider';

function InfiniteSliderBasic() {
  return (
    <InfiniteSlider
      gap={24}
      reverse
      className='w-full h-full'
      duration={28}
      durationOnHover={42}
    >
      <img
        src='https://motion-primitives.com/apple_music_logo.svg'
        alt='Apple Music logo'
        className='h-12 w-auto opacity-80'
      />
      <img
        src='https://motion-primitives.com/chrome_logo.svg'
        alt='Chrome logo'
        className='h-12 w-auto opacity-80'
      />
      <img
        src='https://motion-primitives.com/strava_logo.svg'
        alt='Strava logo'
        className='h-12 w-auto opacity-80'
      />
      <img
        src='https://motion-primitives.com/nintendo_logo.svg'
        alt='Nintendo logo'
        className='h-12 w-auto opacity-80'
      />
      <img
        src='https://motion-primitives.com/jquery_logo.svg'
        alt='Jquery logo'
        className='h-12 w-auto opacity-80'
      />
      <img
        src='https://motion-primitives.com/prada_logo.svg'
        alt='Prada logo'
        className='h-12 w-auto opacity-80'
      />
    </InfiniteSlider>
  );
}

export default {
  InfiniteSliderBasic,
};

