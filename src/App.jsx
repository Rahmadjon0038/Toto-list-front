import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { useDelete, useGetData, usePostdata, useUpdate } from './server';
import image from "./assets/react.svg";
import bgvideo from './assets/bgvideo.mp4'
import defaultuser from './assets/user.png'
function App() {
  const [addata, setAddata] = useState('');
  const [banner, setBanner] = useState(0);
  const { data, isLoading } = useGetData()
  const { mutate } = usePostdata()
  const { mutate: deleMutate } = useDelete();
  const { mutate: updateMutate } = useUpdate()

  const addTask = () => {
    const trimdata = addata?.trim();
    if (trimdata && trimdata.length > 0) {
      mutate({ task: trimdata, banner });
      setAddata(''); 
      setBanner(null);
    } else {
      toast.error("Maydon bo‘sh bo‘lmasligi kerak!");
    }
  };

  const handeDelete = (id) => {
    deleMutate(id)
  };
  const handleComplate = (item) => {
    updateMutate({ id: item.id, created: !item.created })
  };
  if (isLoading) return (
    <div className='loadingcont'>
      <div class="loader">
        <div class="truckWrapper">
          <div class="truckBody">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 198 93"
              class="trucksvg"
            >
              <path
                stroke-width="3"
                stroke="#282828"
                fill="#F83D3D"
                d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"
              ></path>
              <path
                stroke-width="3"
                stroke="#282828"
                fill="#7D7C7C"
                d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"
              ></path>
              <path
                stroke-width="2"
                stroke="#282828"
                fill="#282828"
                d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z"
              ></path>
              <rect
                stroke-width="2"
                stroke="#282828"
                fill="#FFFCAB"
                rx="1"
                height="7"
                width="5"
                y="63"
                x="187"
              ></rect>
              <rect
                stroke-width="2"
                stroke="#282828"
                fill="#282828"
                rx="1"
                height="11"
                width="4"
                y="81"
                x="193"
              ></rect>
              <rect
                stroke-width="3"
                stroke="#282828"
                fill="#DFDFDF"
                rx="2.5"
                height="90"
                width="121"
                y="1.5"
                x="6.5"
              ></rect>
              <rect
                stroke-width="2"
                stroke="#282828"
                fill="#DFDFDF"
                rx="2"
                height="4"
                width="6"
                y="84"
                x="1"
              ></rect>
            </svg>
          </div>
          <div class="truckTires">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              class="tiresvg"
            >
              <circle
                stroke-width="3"
                stroke="#282828"
                fill="#282828"
                r="13.5"
                cy="15"
                cx="15"
              ></circle>
              <circle fill="#DFDFDF" r="7" cy="15" cx="15"></circle>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              class="tiresvg"
            >
              <circle
                stroke-width="3"
                stroke="#282828"
                fill="#282828"
                r="13.5"
                cy="15"
                cx="15"
              ></circle>
              <circle fill="#DFDFDF" r="7" cy="15" cx="15"></circle>
            </svg>
          </div>
          <div class="road"></div>

          <svg
            xml:space="preserve"
            viewBox="0 0 453.459 453.459"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            id="Capa_1"
            version="1.1"
            fill="#000000"
            class="lampPost"
          >
            <path
              d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993
c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514
c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16
c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914
h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75
v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795
V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z
M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017
h78.747C231.693,100.736,232.77,106.162,232.77,111.694z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className='wrapper'>
      <div className="container">
        <ToastContainer position="top-left"
          reverseOrder={true} />
        <h1>Todo List</h1>
        <input type="file" onChange={(e) => setBanner(e.target.files[0])} style={{ marginBottom: '10px' }} />
        <div className="input-section">
          <input
            value={addata}
            onChange={(e) => setAddata(e.target.value)}
            type="text"
            onKeyDown={(e) => e.key === "Enter" ? addTask() : {}}
            placeholder="Yangi vazifa kiriting..."
          />
          <button onClick={addTask}>Qo‘shish</button>
        </div>
        <ul className="todo-list">
          {data?.map((item, index) => (
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key={item.id}>

              <label class="neon-checkbox">
                <input type="checkbox" checked={item.created}
                  onChange={() => handleComplate(item)} />
                <div class="neon-checkbox__frame">
                  <div class="neon-checkbox__box">
                    <div class="neon-checkbox__check-container">
                      <svg viewBox="0 0 24 24" class="neon-checkbox__check">
                        <path d="M3,12.5l7,7L21,5"></path>
                      </svg>
                    </div>
                    <div class="neon-checkbox__glow"></div>
                    <div class="neon-checkbox__borders">
                      <span></span><span></span><span></span><span></span>
                    </div>
                  </div>
                  <div class="neon-checkbox__effects">
                    <div class="neon-checkbox__particles">
                      <span></span><span></span><span></span><span></span> <span></span
                      ><span></span><span></span><span></span> <span></span><span></span
                      ><span></span><span></span>
                    </div>
                    <div class="neon-checkbox__rings">
                      <div class="ring"></div>
                      <div class="ring"></div>
                      <div class="ring"></div>
                    </div>
                    <div class="neon-checkbox__sparks">
                      <span></span><span></span><span></span><span></span>
                    </div>
                  </div>
                </div>


              </label>
              <img className='userImg' style={{ width: '40px' }} src={item.banner ? `http://localhost:3000${item.banner}` : defaultuser} alt="img" />
              <span style={{ textDecoration: item.created ? 'line-through' : '' }}>
                <span>{item.task}</span>
              </span>

              <button class="btn" onClick={() => handeDelete(item.id)}>delete</button>

            </motion.li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default App;