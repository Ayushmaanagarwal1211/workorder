import React, { useRef, useState } from 'react';
import { FaPlus,FaMinus, FaCaretDown , FaCaretUp } from 'react-icons/fa6';
import { Modal, Switch } from 'antd';

export default function Main() {
    let [packagecheck,setpackage]=useState(false)
    let select=useRef()
    const [commencementDate, setCommencementDate] = useState('');
    const [completionDate, setCompletionDate] = useState('');
    const [rfqCode, setRfqCode] = useState('');
    let [isOverview,setIsOverview]=useState(true)
    const [dateError, setDateError] = useState('');
    const [isShareModalVisible, setShareModalVisible] = useState(false);
    const handleShareModalClose = () => {
        setShareModalVisible(false);
      };
      const validateDate = (date) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
        return regex.test(date);
    };
    const handleCommencementDateChange = (e) => {
        const value = e.target.value;
        setCommencementDate(value)
 };
    const handleCompletionDateChange = (e) => {
        const value = e.target.value;
       setCompletionDate(value)
    };
    const [data, setData] = useState([
        {
            package: "Civil 0", 
            rate: "567", 
            total: "284548934", 
            isChecked: false, 
            isExpanded: false, 
            activities: [
                { name: "Activity 1", workitem: [{name:"workitem1",isChecked:false},{name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
                { name: "Activity 2", workitem: [{name:"workitem1",isChecked:false},{name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
                { name: "Activity 3", workitem: [{name:"workitem1",isChecked:false},{name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
            ]
        },
        {
            package: "Civil 1", 
            rate: "670", 
            total: "284548935", 
            isChecked: false, 
            isExpanded: false, 
            activities: [
                { name: "Activity 1", workitem: [{name:"workitem1",isChecked:false}, {name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
                { name: "Activity 2", workitem: [{name:"workitem1",isChecked:false}, {name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
            ]
        },
        {
            package: "Civil 1", 
            rate: "670", 
            total: "284548935", 
            isChecked: false, 
            isExpanded: false, 
            activities: [
                { name: "Activity 1", workitem: [{name:"workitem1",isChecked:false}, {name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
                { name: "Activity 2", workitem: [{name:"workitem1",isChecked:false}, {name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
            ]
        },
        {
            package: "Civil 1", 
            rate: "670", 
            total: "284548935", 
            isChecked: false, 
            isExpanded: false, 
            activities: [
                { name: "Activity 1", workitem: [{name:"workitem1",isChecked:false}, {name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
                { name: "Activity 2", workitem: [{name:"workitem1",isChecked:false}, {name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
            ]
        },
        {
            package: "Civil 1", 
            rate: "670", 
            total: "284548935", 
            isChecked: false, 
            isExpanded: false, 
            activities: [
                { name: "Activity 1", workitem: [{name:"workitem1",isChecked:false}, {name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
                { name: "Activity 2", workitem: [{name:"workitem1",isChecked:false}, {name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
            ]
        },
        {
            package: "Civil 1", 
            rate: "670", 
            total: "284548935", 
            isChecked: false, 
            isExpanded: false, 
            activities: [
                { name: "Activity 1", workitem: [{name:"workitem1",isChecked:false}, {name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
                { name: "Activity 2", workitem: [{name:"workitem1",isChecked:false}, {name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
            ]
        },
        {
            package: "Civil 1", 
            rate: "670", 
            total: "284548935", 
            isChecked: false, 
            isExpanded: false, 
            activities: [
                { name: "Activity 1", workitem: [{name:"workitem1",isChecked:false}, {name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
                { name: "Activity 2", workitem: [{name:"workitem1",isChecked:false}, {name:"workitem1",isChecked:false}], isExpanded: false, isChecked: false },
            ]
        }
    ]);

    const checkAllPackages = () => {
        if(packagecheck){
            setpackage()
        }else{

        }
        const newData = data.map(item => {
            const newChecked = !item.isChecked;
            item.activities.map((d)=>{
                d.workitem.map((d)=>d.isChecked=newChecked)

            })
            return {
                ...item,
                isChecked: newChecked,
                activities: item.activities.map(activity => ({
                    ...activity,
                    isChecked: newChecked,
                    
                }))
            };
        });
        setData(newData);
    };

    const checkAllActivities = (index) => {
        const newData = [...data];
        const isChecked = !newData[index].isChecked;
        newData[index].isChecked = isChecked;

        newData[index].activities = newData[index].activities.map(activity => {
            activity.workitem.map((d)=>d.isChecked=isChecked)
            return {
                ...activity,
                isChecked: isChecked,
                workitem: activity.workitem
            };
        });

        setData(newData);
    };

    const handleOpener1 = (index) => {
        const newData = [...data];
        newData[index].isExpanded = !newData[index].isExpanded;
        setData(newData);
    };

    const handleOpener2 = (index, activityIndex) => {
        const newData = [...data];
        newData[index].activities[activityIndex].isExpanded = !newData[index].activities[activityIndex].isExpanded;
        setData(newData);
    };

    const handleSingleCheck = (index) => {
        const newData = [...data];
        newData[index].isChecked = !newData[index].isChecked;
        setData(newData);
    };
    function handleworkChange(index,index1,index2){
        const newData = [...data];
        if(newData[index].activities[index1].workitem[index2].isChecked){
            newData[index].activities[index1].workitem[index2].isChecked=false
        }else{
            newData[index].activities[index1].workitem[index2].isChecked=true
        }
        setData(newData);
    }
    const handleSubmit = () => {
        
   
        if (commencementDate && completionDate && rfqCode &&validateDate(commencementDate) && validateDate(completionDate)) {
            const formData = {
               client:select.current.value, commencementDate,
                completionDate,
                rfqCode,

            };
            console.log(formData);
            // Optionally, you can reset the fields after submission
            setCommencementDate('');
            setCompletionDate('');
            setRfqCode('');
            handleShareModalClose(); // Close the modal after submission
        } else {
            alert('Please fill in all fields correctly.');
        }
    };
    return (
        <div className='w-[100vw] p-10'>
       <>
       
            <h1 className='text-2xl mb-10'>Create WorkOrder</h1>
            <div className='flex mb-10 relative'>
              
                <div onClick={()=>setIsOverview(true)} className={` cursor-pointer border-black border-b-[2px] ${!isOverview?"border-b-gray-400 text-gray-400":"border-b-black text-black"} text-black font-semibold text-lg  w-[250px] text-center p-2`}>Overview</div>
                <div onClick={()=>setIsOverview(false)} className={`w-[250px] cursor-pointer border-b-[2px] ${isOverview?"border-b-gray-400 text-gray-400":" text-black border-b-black"}  font-semibold text-lg text-center p-2`}>Other</div>
                <button onClick={()=>setShareModalVisible(true)} className='absolute right-20 p-2 text-lg pl-4 pr-4 rounded-md text-white bg-green-400 '>Save </button>
            </div>
        {isOverview &&   <div className='w-[100%] flex flex-row gap-0 bg-blue-400 text-black font-semibold text-md pt-[10px] pb-[10px] pl-[15px]'>
                <div className='w-[33%]  font-[450]  text-[17px]'>
                    <input onChange={checkAllPackages} type='checkbox' className='mr-[50px]' />
                   Packages
                </div>
                <div className='w-[33%] font-[450]   text-[17px]'>Rate <em>(in sqft.)</em></div>
                <div className='w-[33%]   font-[450]  text-[17px]'>Total</div>
        </div>}
         {isOverview ?   data.map((item, index) => (
                <div key={index}>
                    <div className='w-[100%]  font-[450]  text-black pt-[10px] pb-[10px] pl-[15px] flex flex-row gap-0'>
                        <div className='w-[33%] '>
                            <input 
                                type='checkbox' 
                                checked={item.isChecked} 
                                onChange={() => checkAllActivities(index)} 
                                className='mr-[50px]' 
                            />
                           {item.package}
                        </div>
                        <div className='w-[33%] '>{item.rate}</div>
                        <div className='w-[33%] flex flex-row justify-between'>
                            {item.total} 
                           
                           {item.isExpanded ?<FaMinus className='relative right-[120px] cursor-pointer' onClick={() => handleOpener1(index)} color='blue' size={'1.4rem'} />: <FaPlus className='relative right-[120px] cursor-pointer' onClick={() => handleOpener1(index)} color='blue' size={'1.4rem'} />}
                        </div>
                    </div>
                    {item.isExpanded && item.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className='text-black '>
                            <div className='w-[100%] pt-[10px] pb-[10px] pl-[15px] flex flex-row gap-0'>
                                {/* <div className='sd w-[20%] relative'>
                                    {activityIndex === 0 && <div className='absolute h-[20px] w-[180px] border-b border-l border-b-gray-300 border-l-gray-300 top-[-10px] right-4'></div>}
                                </div> */}
                                <div className='w-[33%] relative pl-[6%]'>
                                {activityIndex === 0 && <div className='absolute h-[20px] w-[50px] border-b-[2px] border-l-[2px] border-b-gray-300 border-l-gray-300 top-[-10px] left-6'></div>}

                                    <input 
                                        type='checkbox' 
                                        checked={activity.isChecked} 
                                        onChange={() => {
                                            const newData = [...data];
                                            const isChecked = !newData[index].activities[activityIndex].isChecked;
                                            newData[index].activities[activityIndex].isChecked = isChecked;
                                            newData[index].activities[activityIndex].workitem.map((d)=>{
                                                console.log(d,newData[index].activities[activityIndex])
                                                d.isChecked=isChecked
                                            })
                                            // console.log(newData[index].activities[activityIndex].workitem)
                                            setData(newData);
                                        }} 
                                        className='mr-[50px]' 
                                    />
                                    <em>{activity.name}</em>
                                </div>
                                <div className='w-[33%] '>{item.rate}</div>
                                <div className='w-[33%] flex flex-row justify-between  '>
                                    {item.total} 
                                 {activity.isExpanded ?<FaCaretUp onClick={() => handleOpener2(index, activityIndex)} className='relative  cursor-pointer right-[125px]' />:   <FaCaretDown onClick={() => handleOpener2(index, activityIndex)} className='relative  cursor-pointer right-[125px]' />}
                                </div>
                            </div>
                            {activity.isExpanded && activity.workitem.map((workitem, workitemIndex) => (
                                <div key={workitemIndex} className='w-[100%] flex pt-[10px] pb-[10px] pl-[15px] flex-row gap-0 '>
                                    <div className='w-[33%] relative pl-[18%]'>
                                    <div className='absolute h-[20px] w-[50px] border-b-[2px] border-l-[2px] border-b-gray-300 border-l-gray-300 top-[-10px] left-52'></div>

                                        <input type='checkbox' checked={workitem.isChecked} onClick={()=>handleworkChange(index,activityIndex,workitemIndex)} className='mr-[50px]' />
                                        <em>{workitem.name}</em>
                                    </div>
                                    <div className='w-[33%] '></div>
                                    <div className='w-[33%] '></div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))
            : <div>Hello world</div>}
              <Modal
            title="Please Fill the Details"
            visible={isShareModalVisible}
            onCancel={handleShareModalClose}
            footer={null}
            centered
            className="modal-custom flex flex-col gap-4 justify-center"
        >
            <div className="modal_content p-6">
            <label className="block mb-1">Select Client:</label>
            <select ref={select} className='h-[40px] w-full border border-gray-300 rounded-lg text-center mb-4'>
                    <option value={"a"}>A</option>
                    <option value={"b"}>B</option>
                    <option value={"c"}>C</option>
                </select>
                
                <div className=''>
                    <label className="block mb-1">Date of Commencement:</label>
                    <input 
                        type="text" 
                        value={commencementDate} 
                        onChange={handleCommencementDateChange} 
                        placeholder="YYYY-MM-DD" 
                        className='border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
                <div className='my-4'>
                    <label className="block mb-1">Date of Completion:</label>
                    <input 
                        type="text" 
                        value={completionDate} 
                        onChange={handleCompletionDateChange} 
                        placeholder="YYYY-MM-DD" 
                        className='border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                {/* RFQ Code Field */}
                <div className='my-4'>
                    <label className="block mb-1">RFQ Code:</label>
                    <input 
                        type="text" 
                        value={rfqCode} 
                        onChange={(e) => setRfqCode(e.target.value)} 
                        className='border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
            <button 
                onClick={handleSubmit} 
                className="bg-blue-600 m-auto text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                Done
            </button>
                </div>
        </Modal>
       </>
       
        </div>
    );
}
