const ThreeGrammar = () => {
  return (
    <div>
      <div className="main-grammar">
        <div className="first-grammar">
          <div className="grammar-title">
            <h2>Declarative Sentence</h2>
          </div>
          <div className="grammar-pics">
            <img
              src="https://placehold.co/600x400.png"
              alt="first-pic"
              className="grammar-pic"
            />
            <img
              src="https://placehold.co/600x400.png"
              alt="second-pic"
              className="grammar-pic"
            />
          </div>
          <div className="grammar-rules-exc">
            <div className="grammar-rules">
              <span>
                Declarative sentence (khmer): <br />
                <strong>
                  subject + verb + object + adjective + article
                </strong>{" "}
                <br />
              </span>
              <span>
                Declarative sentence (English): <br />
                <strong>subject + verb + article + object + adjective</strong>
              </span>
            </div>
            <div className="grammar-examples">
              <span>
                <strong>Example: </strong>ខ្ញុំមានឡានពណ៍ក្រហមមួយ។ (Khnom mean
                lan por krohorm muoy)
              </span>
              <span>
                <strong></strong>I have a red car.
              </span>
              <span>
                <strong>Subject: </strong> ខ្ញុំ (I)
                <br />
                <strong>Verb: </strong> មាន (have) <br />
                <strong>Object: </strong> ឡាន (car) <br />
                <strong>Adjective: </strong> ពណ៍ក្រហម (red) <br />
                <strong>Article: </strong> មួយ (a) <br />
              </span>
            </div>
          </div>
          <div className="grammar-prompt">
            <span>
              <strong>Note: </strong>Khmer verbs don't change the form of the
              verb or tense, therefore; the verb (អាន / ញុំា) doesn't change
              even if you use it in the present, futuer, or past form.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeGrammar;
