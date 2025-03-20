import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import '../components/aurora.css';

const Grid = () => {
  return (
    <section  className="aurora-background">
      <BentoGrid>
        {gridItems.map(({ id, description, title, className, imgName, titleClassName, img, spareImg }) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            className={className}
            imgName={imgName}
            titleClassName={titleClassName}
            img={img}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;