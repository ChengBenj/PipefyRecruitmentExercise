import Card from "../components/card";
import Input from "../components/input";
import CheckboxList from "../components/input/Checkbox";
import Radios from "../components/input/radios";
import Select from "../components/input/select";
import TextArea from "../components/input/textarea";
import DatePicker from "../components/input/date";
import Button from "../components/button";
import { useState } from "react";


export default function Home() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [skill, setSkill] = useState(0);
  const [jsLib, setLib] = useState(null);
  const [xp, setXp] = useState([]);
  const [start, setStart] = useState(0);

  console.log(start)

  return (
    <div className="bg-background-color h-full">
      <div className="max-w-screen-lg	 w-full mx-auto h-full">
        <div className="w-full h-full py-4 px-8 flex flex-col lg:flex-row">
          <Card className="mr-0 mb-4 lg:mr-4 lg:mb-0">
            <h1 className="text-title text-2xl font-bold">Pipefy Recruitment Test</h1>
            <h3 className="text-subtitle text-2xl font-bold">Recruitment Survey</h3>
          </Card>

          <Card className="w-full">
            <Input label="Your name" value={name} onChange={setName} />

            <TextArea label="Your bio" value={bio} onChange={setBio} />

            <Select label="Primary Skill" options={[
              { id: 1, name: "UX" },
              { id: 2, name: "Front-end" },
              { id: 3, name: "Back-end" },
              { id: 4, name: "DBA" },
              { id: 5, name: "DevOps" },
            ]} value={skill} onChange={setSkill} />

            <Radios
              label="Javascript library of choice"
              value={jsLib}
              onChange={setLib}
              options={[
                { id: 1, name: "React" },
                { id: 2, name: "Angular" },
                { id: 3, name: "Vue" }
              ]}
            />

            <CheckboxList
              label="Additional Experience"
              value={xp}
              onChange={setXp}
              options={[
                { id: 1, name: "TDD" },
                { id: 2, name: "Heroku" },
                { id: 3, name: "Github" }
              ]}
            />

            <DatePicker
              label="Start Date"
              value={start}
              onChange={setStart}
            />

            <Button
              onClick={() => { }}
            >Submit</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
