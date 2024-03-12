import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ShapeSet1Type = {
  listItemOnIntroducingNewA?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ShapeSet1: NextPage<ShapeSet1Type> = ({
  listItemOnIntroducingNewA,
  propBackgroundColor,
  propMinWidth,
}) => {
  const sectionListItemStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const listItemStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="w-[1413.5px] flex flex-row items-start justify-center pt-0 px-5 pb-[18px] box-border max-w-full text-left text-lg text-gray-300 font-poppins">
      <div className="w-[603.5px] flex flex-row flex-wrap items-start justify-center gap-[17px] max-w-full">
        <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
          <div
            className="w-2 h-2 relative rounded-5xs bg-darkslategray"
            style={sectionListItemStyle}
          />
        </div>
        <div
          className="h-[54px] flex-1 relative leading-[27px] inline-block min-w-[376px] max-w-full mq450:min-w-full"
          style={listItemStyle}
        >
          {listItemOnIntroducingNewA}
        </div>
      </div>
    </div>
  );
};

export default ShapeSet1;