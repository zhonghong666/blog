import React,{useState ,useEffect} from 'react'
import {Avatar,Divider,Tooltip ,Tag} from 'antd'
import '../static/style/components/author.css'
import  servicePath  from '../config/apiUrl'
import axios from 'axios'
import CountUp from 'react-countup'

const Author =()=>{



    const [ all_part_count , setAll_part_count ] = useState(0);
    const [ all_view_count , setAll_view_count ] = useState( 0);

    useEffect(()=>{
        
        fetchData()
        
    },[])


    const fetchData = async ()=>{
        const result = await axios(servicePath.getAllPartCount).then(
            (res)=>{  return res.data.data  }
          )
          setAll_part_count(result[0].all_part_count)
          setAll_view_count(result[0].all_view_count)
    }

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="../public/head.jpg" /></div>
            <div className="author-introduction">
                <div className="author-name">初夏怜殇</div>
                <div>专注于全栈开发</div>
                <div className="author-tag">
                <Tag color="magenta">越努力，越幸运</Tag>
                <Tag color="green">1年经验</Tag>
                <Tag color="geekblue">全栈开发工程师</Tag>
                <Tag color="blue">博文<CountUp end={all_part_count} /> 篇</Tag>
                <Tag color="cyan">被访问<CountUp end={all_view_count} />次</Tag>
                </div>

                <Divider>社交账号</Divider>
                <Tooltip title="B站 : https://space.bilibili.com/67937171">
                    <a href="https://space.bilibili.com/67937171" target="_blank">
                    <Avatar size={28} src="http://newimg.jspang.com/bilibiliIcon1.png" className="account"  />
                    </a>
                </Tooltip>
                <Tooltip title="https://github.com/zhonghong666">
                    <a href="https://github.com/zhonghong666" target="_blank">
                    <Avatar size={28} icon="github" className="account"  />
                    </a>
                </Tooltip>
                <Tooltip title="QQ:1789592159">
                    <Avatar size={28} icon="qq"  className="account" />
                </Tooltip>
                <Tooltip title="wechat:15579872216">
                <Avatar size={28} icon="wechat"  className="account"  />
                </Tooltip>

            </div>
        </div>
    )

}



export default Author