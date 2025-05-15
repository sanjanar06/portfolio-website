const Deepfake = () => {
  return (
    <section
      id="front-end"
      className="snap-start min-h-[calc(100vh-5rem)] mx-auto max-w-screen-lg px-4 xl:px-0"
    >
      <h2 className="text-3xl font-bold text-center mb-2">
        Deepfake Detection Based on Audio-Visual Mismatch
      </h2>
      <h3 className="text-2xl text-gray-700 font-mono text-center mb-2">Say M-I-M-O-S-A with open-mouth</h3>

      <hr className="border-t-2 border-gray-700" />

      <div className="flex flex-wrap gap-2 mt-2 items-center justify-center mb-4">
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">CNN</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Kaggle</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Tensor Flow</span>
      </div>

      <div className="text-justify text-black dark:text-white bg-accent font-sans p-4 dark:font-thin rounded-2xl">
        <p className="  mb-4">
          The core problem we addressed was identifying subtle discrepancies between what is heard and what is seen—specifically, the alignment between phonemes (speech sounds) and visemes (corresponding lip movements). Our goal was to design a model capable of detecting these mismatches and accurately labeling a video as real or fake.
        </p>

        <img
            src="/projects/deepfakePipeline.png"
            alt="Deepfake Pipeline"
            className="w-full h-auto rounded-lg shadow-lg mb-4"
          />  

        <p className="text-xl font-bold font-mono mb-1">PIPELINE</p>
        <p className=" mb-4">
          Our solution begins with preprocessing, where videos are decomposed into individual frames, and faces within these frames are aligned and cropped to standardize the inputs. We then implement a lip state detection system, leveraging facial landmark extraction and the mouth aspect ratio to classify frames as depicting either an open or closed mouth. For the audio, we experimented with various speech recognition technologies to extract precise phoneme timestamps, ultimately settling on the Wav2Vec2 model for its superior accuracy and efficiency. Around each phoneme timestamp, we extract a sequence of frames to capture the corresponding visemes. The key innovation lies in comparing these audio and visual data streams to calculate a mismatch score, which reflects inconsistencies between expected lip positions and actual movements. If this mismatch crosses a certain threshold, the video is flagged as a deepfake. Supporting this workflow is a lightweight convolutional neural network trained on lip state data to improve classification accuracy and efficiency.
        </p>

        <p className="text-xl font-bold font-mono mb-1">IMPACT</p>
        <p className=" mb-4">
          This work offers several contributions to the field of deepfake detection. First, we developed a novel pipeline that integrates phoneme-viseme alignment to detect lip-sync anomalies, which are difficult to fake convincingly. Our approach replaces labor-intensive manual labeling with automated lip state detection, enhancing scalability and robustness. Through rigorous evaluation, we identified and incorporated the most effective speech recognition models for phoneme extraction. Additionally, we proposed and trained a streamlined CNN model tailored to the constraints of our dataset, balancing accuracy with computational efficiency. Our methodology also includes handling edge cases in frame extraction to ensure comprehensive viseme analysis across the entire video timeline.
        </p>
        <p className="text-xl font-bold font-mono mb-1">FUTURE SCOPE</p>
        <p className=" mb-4">
          Looking ahead, there are multiple avenues to enhance this work. Refining the preprocessing steps by incorporating grayscale image conversion and advanced audio signal processing could further boost model accuracy. More sophisticated neural architectures may be explored to improve detection performance without compromising speed. Beyond lip movements, integrating other facial cues such as eye and head movements could strengthen the model’s ability to detect more subtle deepfakes. Expanding the dataset with more diverse speakers and varying recording conditions will be essential to improve the model’s generalizability. Finally, transitioning this system toward real-time deployment on social media platforms or forensic tools could offer practical solutions to combat the spread of deepfake content.
        </p>
      </div>
    </section>

  );
};

export default Deepfake;