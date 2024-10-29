import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export default function FirstSection() {
  const { t } = useTranslation();
  return (
    <div className="flex md:flex-row flex-col gap-y-2 md:gap-y-0 text-text  justify-between items-start md:items-center">
        <div className="flex flex-row items-center gap-x-2">
          <p className="text-text text-sm ">{t(`Workspace`)}</p>
          <FaChevronRight />
          <p className="text-text text-sm ">{t(`creative`)}</p>
          <FaChevronRight />
          <p className="text-black font-bold text-sm">Creative Website</p>
        </div>
        <div className="flex flex-col text-text text-xs md:text-sm md:items-end">
          <p className="text-black font-bold">{t(`date`)}</p>
          <div className="flex flex-row items-center gap-x-1 " >
            <div className="w-2 h-2 bg-green-600 rounded-full" />
            <p>{t('update')}</p>
          </div>
        </div>
      </div>
  )
}
