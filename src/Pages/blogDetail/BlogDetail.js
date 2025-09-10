import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { TfiWrite } from "react-icons/tfi";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa6";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { UserContext } from '../../App';
import Footer from '../../Component/footer/Footer';
import logo from "../../Assets/blogging-icon-27.jpg"
import BackButton from '../../Component/backButton/BackButton';
import Loading from '../../Component/loading/Loading';
import { ErrorToast, SuccessToast } from '../../utils/toast';

const BlogDetail = () => {
    const {user}=useContext(UserContext)
    const params=useParams()
    const navigate=useNavigate()
    const[blogDetails,setBlogDetails]=useState([])
    const [comments,setComments]=useState([])
    const[commentshow,setCommentShow]=useState(false)
    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState("");
    const[loading,setLoading]=useState(true)
    const token = localStorage.getItem('token');
    

   useEffect(()=>{
     const fetchBlogDetails=async()=>{
      setLoading(true)
      try{
      const apiResponse=await axios.get(`http://localhost:8000/bloggingApplication/api/v1/blog/${params.id}`)
      const result=apiResponse?.data;
      setBlogDetails(result)
      }
      catch(e){
       
        ErrorToast(e?.message ||'error while loading blogdetails')
      }
      finally {
  setLoading(false);
}
    }
    fetchBlogDetails()
   },[params.id,token])
   
   useEffect(() => {
  const fetchComments = async () => {
   try {
      const response = await axios.get(`http://localhost:8000/bloggingApplication/api/v1/blog/comment/getComment/${params.id}`);
      setComments(response.data);
      
    } catch (error) {
      
      ErrorToast(error?.message ||"Error fetching comments" )
    } 
   
  };

  fetchComments();
}, [params.id]);
   
const handleCommentClick=()=>{
setCommentShow(!commentshow)
}

 const handleLike = async () => {
    try {
    const response = await axios.post(
      `http://localhost:8000/bloggingApplication/api/v1/blog/${blogDetails._id}/like`,
      {},
     {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    
    setBlogDetails(prev => ({
        ...prev,
        likeCount: response.data.likeCount,
        isLiked: !prev.isLiked,  
      }));
  } catch (error) {
   
    if (error.response) {
     ErrorToast(error.response.data.message || 'Failed to like the post')
    } else {
    ErrorToast('Something went wrong while liking the post.')
    }
    ErrorToast('Error liking the post:', error);
  }
   };

const handlePost=async()=>{
  if(!message){
   ErrorToast("Please write a comment first");
   return
  }
  if (!token) {
    ErrorToast("You must be logged in to comment");
    return;
  }
try{
const res = await axios.post("http://localhost:8000/bloggingApplication/api/v1/blog/comment/postComment", 
        {
          commentMessage: message,
          blogId: params.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data,'comments')
      setComments((p)=>{
        
       return [res.data,...p]
      })
      SuccessToast('comment posted successfully')
      setMessage("");
      setShowForm(false);
      
}
catch(err){
  
  ErrorToast(err.response?.data?.message || "Error posting comment");
}
finally {
setLoading(false);
}

}


 
    
  return (
   <div className='tapp-bg tapp-text  w-full h-full'>
     <div className='flex justify-between px-10 py-4 items-center'>
      <div >
         <img src={logo} alt="app logo" className="w-12 h-12 object-contain" />
      </div>
      <div className='flex items-center'> 
      <div className='mx-4 flex items-center'>
     <div className="p-2 bg-amber-100 text-amber-600 rounded-full cursor-pointer shadow-md hover:bg-amber-200 transition">
      <TfiWrite size={20} onClick={()=>navigate('/createBlog')}/>
     </div>
      <div className=''>Write</div>
      </div>
   {user && (
  user.picture ? (
    <img
      className="w-14 h-14 rounded-full object-cover"
      src={user.picture}
      alt={user?.name}
    />
  ) : (
    <div className="w-14 h-14 rounded-full bg-red-100 flex justify-center items-center text-lg font-bold text-gray-700">
      {user?.name?.[0]?.toUpperCase()}
    </div>
  )
)}

      </div>
     </div>
     <BackButton/>
    {loading ? <Loading/> : <div  className=' flex flex-col  px-10 md:px-24 '>
      <img src={blogDetails?.blogBanner}
        alt="blog-Banner" className='h-[400px] w-full object-cover'
      />
      <div className=' text-xl font-medium py-2 xs:text-2xl xs:font-semibold xs:py-4 sm:text-3xl md:text-4xl md:font-bold'>{blogDetails?.title}</div>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
        <div className=' flex items-center py-2 sm:py-4 '>
           <div className='w-14 h-14 rounded-full bg-red-100 flex justify-center items-center '>{blogDetails?.userId?.name[0]}</div>
           <div className='text-lg font-normal px-2 sm:text-xl sm:font-medium '>{blogDetails?.userId?.name}</div>
        </div>
        <div className='px-2 sm:px-0'>{blogDetails?.createdAt?.slice(0, 10)}</div>
      </div>
      <div className='flex justify-between items-center py-4 my-2 text-lg border-y-2 border-slate-200 border-solid '>
        <div className=' flex justify-between items-center'>
          <div className=' flex  items-center '>
          <span  onClick={handleLike} style={{color: blogDetails?.isLiked ? 'red' : 'gray', cursor: 'pointer',userSelect: 'none',display: 'inline-flex', 
           alignItems: 'center',
           gap: '4px'
          }}
          >
         <SlLike />
         <span className='px-0.5'>{blogDetails?.likeCount}</span>
         </span>
          </div>
          <div className='px-2 flex px-12 items-center cursor-pointer' onClick={handleCommentClick}
>           <span><FaRegCommentDots/></span>
            <span className='px-0.5'>{comments?.length ?? 0}</span>
          </div>
           
        </div>
        
        {/* <div>share</div> */}
      </div>
   {commentshow &&
    <div className="mt-4 border border-gray-300 rounded-lg p-3 bg-white shadow-sm">
       <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">Comments</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-3 py-1 bg-amber-500 text-white text-sm rounded hover:bg-amber-600"
        >
          Add Comment
        </button>
      </div>

      {showForm && (
        <div className="flex items-start gap-3 mb-3 border-b pb-3">
         <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            {user?.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-sm font-semibold text-gray-700">
                {user?.name?.[0]?.toUpperCase()}
              </span>
            )}
          </div>
         
          <div className="flex-1">
            <p className="text-sm font-medium mb-1">{user?.name}</p>
            <textarea
              rows="2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your comment..."
              className="w-full border border-gray-300 rounded px-3 py-1 text-sm"
            />
            <button className="mt-2 px-3 py-1 bg-amber-500 text-white text-sm rounded hover:bg-amber-600" onClick={handlePost}>Post</button>
          </div>
        </div>
      )}
    
      {comments.length === 0 ? (
        <p className="text-gray-500 text-sm">No comments yet</p>
      ) : (
        <ul className="space-y-3">
          {comments.map((item, i) => (
            <li key={i} className="flex items-start gap-3 border-b pb-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                {item.userImage ? (
                  <img
                    src={item.userImage}
                    alt={item.userName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-semibold text-gray-700">
                    {item.userId?.name?.[0]?.toUpperCase()}
                  </span>
                )}
              </div>
             
              <div>
                <p className="text-sm font-medium">{item?.userId?.name}</p>
                <p className="text-sm text-gray-700">{item.commentMessage}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    }


      <div className='py-10'>
      {blogDetails?.content}

      </div>
     </div>}
    
    <Footer/>

    </div>
  )
}

export default BlogDetail