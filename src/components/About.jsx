import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export  function About() {
  return (
    <div>

        <div>
        <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src=""
        width={100}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter>
    </Card>
        </div>
        <div>
            <p className="text-5xl text-center m-10">ProCase</p>
            <p className="text-2xl"> Our mission is to give everyone a voice and show them the world.We believe that everyone deserves to have a voice, and that the world is a better place when we listen, share and build community through our stories.</p>
        </div>
    </div>
  );
}
