// 선택된 탭만 보여주기

import { useState } from "react"


initialValue = [
    {
        tabs: "section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tabs: "section 2",
        content: "I'm the content of the Section 2"
    }
]

const useTabs = (initialTab, allTabs) => {
    if(!allTabs || !Array.isArray(allTabs)) return;
    const [currentIndex, setCurrentIndex]  = useState(initialTab);
    return {
        currentItem : allTabs[currentIndex],
        changeItem : setCurrentIndex
    }
}

// const {currentItem} = useTabs(0, content)

// .map(section, index) => (
//     ... onclick changeItem(index)
// )