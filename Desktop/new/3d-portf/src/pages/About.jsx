import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { CTA } from "../components"; 
import React from 'react'

import { skills, experiences } from '../constants'

function About() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font semibold drop-shadow">Leonard</span>
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>My interpersonal approach is characterized by an analytical and philosophical mindset. 
            I enjoy engaging in meaningful discussions to gain a comprehensive understanding of others, 
            providing a platform for partners to articulate and convey their opinions and perspectives effectively, 
            rather than to disprove them. I also appreciate employing the analytical method '5 Whys' to address problems, 
            as it allows for a deeper exploration and comprehension of various aspects in everyday situations—a process that I find stimulating.</p>
        </div>

        <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          As I reflect on my career journey, what follows is a timeline of jobs I've undertaken throughout the years. 
          Each experience has shaped me, contributing to the person I am today. Now, I'm ready to start a new chapter, 
          I am filled with excitement for the possibilities it holds. This next stage is not just a continuation; 
          it holds a dream of new opportunities waiting to be explored. I look forward to embracing the challenges, learning, 
          and growing as I navigate this exciting and promising phase of my professional life.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />

    </section>
  )
}

export default About