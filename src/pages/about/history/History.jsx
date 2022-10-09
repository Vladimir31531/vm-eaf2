import React, { useState } from 'react'
import { useEffect } from 'react'
import MuiTabs from '../../../components/ui/mui_tabs/MuiTabs'
import "./history.scss"
import TabContent from './tabContent/tabContent'

export default function History({ history }) {

  let [tabs, settabs] = useState([])
  let [tabContents, settabContents] = useState([])

  useEffect(() => {
    let tabs = []
    let tabContents = []
    history.map((item) => {
      tabs.push({label: item.year})
      tabContents.push(<TabContent content={item} />)
    })
    settabs(tabs)
    settabContents(tabContents)
  }, [])

  let TabsSX = (window.innerWidth > 500)
   ?
    {
      '& .MuiTabs-indicator': {
        backgroundColor: '#0AABC1',
        height: '10px',
        top: 0,
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px',
        color: '#0AABC1',
      },
      '& .MuiButtonBase-root.Mui-selected': {
        backgroundColor: '#fff',
        color: '#0AABC1',
      },
      '& .MuiButtonBase-root': {
        padding: '0.5208333333vw 1.8229166667vw',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '1.3541666667vw',
        lineHeight: '185.6%',
        letterSpacing: '0.19em',
        color: '#444444',
      }
    }
    :
    {
      '& .MuiTabs-indicator': {
        backgroundColor: '#0AABC1',
        height: '1.5777777778vw',
        top: 0,
        borderTopLeftRadius: '3.9444444444vw',
        borderTopRightRadius: '3.9444444444vw',
        color: '#0AABC1',
      },
      '& .MuiButtonBase-root.Mui-selected': {
        backgroundColor: '#fff',
        color: '#0AABC1',
      },
      '& .MuiButtonBase-root': {
        padding: '0.5208333333vw 1.8229166667vw',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '3.3541666667vw',
        lineHeight: '185.6%',
        letterSpacing: '0.19em',
        color: '#444444',
      }
    }

  return (
    <div className="History">
      <h4>history</h4>
      <h3>Our History</h3>
      <div className="History_tabs">
        <MuiTabs
          tabs={tabs}
          tabPanels={tabContents}
          TabsSX={TabsSX}
        />
      </div>
    </div>
  )
}