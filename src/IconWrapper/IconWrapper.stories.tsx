import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { IconWrapper } from 'react95';
import styled from 'styled-components';

const icons = [
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABK0lEQVR4AcXBi23jUAxFwUNCfV12Jrqzx8oYI8gGWtvyR5biGWMhM5sdZabxwMSFeZ7Zw+l04qwB4w7nQJnJWXOHc6CIIDM5a1Y4B5JERJCZnDU3OAeTRESQmZw1FyYOZGbc0IDxY+Ig8zwzzzNLVUVEsOR8mPMOM97lvMuMqmIrZysz9uDsQBFUFVs4W5hRY7AHZyeKoKp4lfMqM2oMJEE373J2pAiqilc4rzCjxkASv7p5h7MzRVBVPMt5lhk1BpK40s1WEy9QBM9QBDUGknhk4hlm1BhIYpUZWzh76WZJEVQVjziPmFFjIIkjTKwx4x9F8KubK2bcogi+dbNmYk03VcWVKiTxn26qilVVSOKWiTsk8SxJbOF8mPNhzodNXKgq/tLEQmby174AAGVj0Xjq+u0AAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEyUlEQVR4Ac3Bi2EbNxBF0QuahaCTGVey7gRvOgkryaATdoIsFK4t0fxJYuScU/ggSYOVpMIFkgZ3SCp8UuEdJA1Wkoqk4e5kJpOkwkrSYOXubDyTdMczSXc8k0n8IqnwAd+4Q9Jwd2VmuLvcnVqrWC3LQimFWiu1Vrm73J1aK57Jj1oxM76XgqeTLsyM76Xwo1Zqrfw4/iBJ5JK7KzODdyjcIWm4O5nJ1Fqj986UmUytNXrvTJnJ5O54OumJmdF7xzMBcYsQk6TCA/Y8wMzYRARTa41NRDC11thkJkKYGSUKvwjUeKHCOSEmSUNS4Y5v3OHucndqrdRaKaVQa+VwOHA8HlmWhVIKtVYOhwPH45FlWSilUGvlcDjgOEnyQn/zQoVbkkQuZWZwwzfucHe5O1EK5ft3zIxaK6UUaq0cDgeOxyPLslBKodbK4XDgeDyyLAulFGqt1GPFcdK/gwdogAe3JAmJgOCKPQ9qQLhjQM/EzHgtIphaa2wigqm1xkYpJqnwEAFiAIULvnGHu8vdiQgaEMDy119EBC5Ra6XWSimFWiuHw4Hj8ciyLJRSqLVyOBw4Ho8sy0IphVor9VhxnCS5SQIlJAKCM3se1IAAGhBA4y0z47WIYGqtsYkIptYaG6WQBOIyCST+pQEUXtnzoAAaEEADAmj8zsx4LSKYWmtsIgJJZCYPkUDikh03SBqcNCCABgTQuM3MMDPcHXcnInB3rhNXSSABYjV4ZcejxsAzCaABwWPMDDPD3blJjaskkEDi3I4rJI3WGq+ZGW0MeiaNLySBBBKIaXCy44beO5eYGYzBU6lwlQQSSCDx2o4nKIXP0wAECDR4QwIJJJAAsdlxg5nx5dR4ocFPEkgggQQSq8FqxwWShrvTe+frBKjxhgY/SSCBBBKbHTd4Ju9RCh8nAcG/gp80QAM0QAIJJDY7rvBM0p2PKIWPkYDgKgkkkNjsuCLd8Uz+jMZbwU8SSGx2/N9I/K4BwU8Smx1XZCbiD5D4XQCNS/ackTRYtdaYIoIvo8HvAmhAcMmeE0mDVWuNKSL4SkKISxoQQAOCc3tJg1VrjSki+BMkIfFCavwSQAOCS/asWmv03vnTJDFJvJA4Cd4Sq8Jqx4mZYWa4O+7OuVL4Mq01WmuAuGfPSe+dyczYZCbnSoExeIrM5LUxBlNE8Kg9Z3rvmBlfQRLTGIMpIrhPrAone55gDB6WmUhiGmMwRQQfteeJxuAuSYwxmCKC9xGrwit7Lui9Y2ZMmcktvXcmM2MzBm/03pnGGEwRwbPs+YTeO2bG1HtnMjM2vXcmM2OKCD5OrApn9jxB7x0zY+q9szEzpojgc8SqcMGeK3rvmBmbMXij946Z0Xtn6r0zmRmbiODzxKpwxZ47zIzeO5OZMQY39d7JTJ6ocMNeEpLITM713pnMjKn3zsbM6L3zp+2BwsrdB6vM5FzvncnMmHrv/F8UfjdYZSbXmBm9d67JTD5DEieFOwrXDVaZyXtlJh8hiZPCgwr3DVaZyaMyk/eQxEnhnQqPG6wyk3syk0dI4qTwQYX3G6wyk2syk1skcVL4pMLHDVaZybnM5BJJnBSepPB5g1VmsslMXpPESeHJCs8zWGUmmckkiZPCf6TwfINfCv+xfwBkA0TLpEkjawAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFX0lEQVR4AdXBjXUaYbJF0XORAulM+iMSK5O+lYkzUVUmQyQ13cjIIAP6sd96mr3FP2C7+SLb4i88cltznThju8cYfEVmsmpAfJG4rm1zjW1WYmW7xxjM88xXVBWZiW1W4gvEn9o2tsUVtts2thljMM8zHxUR2GbT3WyqiszENivxSQ9catvYFjdkZgAeY/Djxw8+IiLY7/dkJicRgW2maUIS0zSRmQaCT3jkBpvmDtuAWZbmHkncIonuZp5nNrax3YD4IHGpbQNmWZp7JGGDDd3NNZK4YGABAjCvuptNVZGZ2GYlPuCBSx4jWZYGBAQQQAABBBBAEAHPzyDBfh/Y5lxEkJm8MrDwYgAGgqOIwDbTNCGJaZrITAPBOx44Y+NlaUCckyACIiACIjiyYQyQYL8PbHOy3++5kIC5JCA5ighsM00Tkpimicw0ENzxwC82vSwNiHMS2GaMwRiDMQaZycbmaAyQYL8PbBMRZCYbAwNIVgGYFwGYCxGBbaZpQhLTNJGZBoIbHljZ9LI0IN6KgDEGy7IwxmC/32ObzMTm1RggwX4fZCYbAwswgOCXAASYqyIC20zThCSmaSIzDQRXPLAaA49hIHgrAjKTiCAisM2yLEQENhfGAMlkJpsBDF4YCH5JXtnw/Aw2RHAUEdhmmiYkMU0TmWkgeGPHDVVJVbKxTXfT3SzLwklVUpVcMhsDC5fMJRuWhVfdvJLEZp5nxhjYZtW8seOGeR7M8+CaiGAzz4N5HlxjLgVgLtn8oZtXktjM88wYA9usmjNiZdPL0oA4qUpOxhi8lZmczPPgJAJsXjUvxDkD5qSbVxJ/6G42VUVmYpuVWD1ywzwPTrq5YvARAsw5AwuwAGIjgQ02f+hu7nnkhqrko+Z58FZ3I4mNuaUBsbG50N18xCM3zPPgb3U3kri0cMmAOelurqkqMhPbrMQvD6wyCSk8RgPBuarkcHjicHjicHjicHjicHjicHhimn5yLgJs6G6QCInn52cigt/MpT0n3c01VUVmYpuVOCPO2PSyNCA+KwJs6G6OJI662Ujit+aFOOlurqkqMhPbrMQbO87YKEJA8xkRYEN3g0RVcdTNSXfzm/iIqiIzsc1KXPHAG5mEFB6jgeA9EWBDd3MUwfTzJ3RzIoEUPD8/ExG8CE66m7eqiszENitxw44rbBQhoLklAiJgMXQ3SCBBN9fYC5vu5j1VRWZim5W4Y8cNNooQ0JyrSiI4soFukKCbV91sJKgqNt286m5OuptzVUVmYpuVeMeOO2wUIaDZVCWZAzDLwm/dHHXz1hgz3bySRETQ3bxVVWQmtlmJD9jxl6qKE4kjCSTo5irbbLqbk6oiM7HNSnzQjjtselkaELdkJlXFphsk6OZVN0eSqCo23c25qiIzsc1KfMKOG2x6WRoQ99hWZlJVbLo56uYPYwy6m3NVRWZim5X4pB3/gG1lJlXFiSQ2kpBEd/NWVZGZ2GYlvmDHDTaKEBF8iG1lJlXFpruRRHdz0t2cVBWZiW1W4oseuCOTyMQSjAGHwxP/+c9PYDBGEsEm+CUzY5omS2KaJmyzsc25qiIzsc1K/IUd75PNh9lWZlJVXFNVZCa2WYm/tOMdNs0n2VZmUlWcqyoyE9usxD+w4w6bZtXdfJZtZSZVRVVRVWQmtlmJf+SRG2x6WZoX4itsy3bb5oz4hx55l/gbtsX/oR032ChCQPOd7XhHhIDmu9pxh41YRYjvasc7bGSzar6jHe+waY7Ed/TIHTa9LM2yiO9qx/+4HXfYECG+sx33yYYI/hDBt/DA+yITS/Djx0+qWA3sZCX+n+34GNkQwbcjPqf5TXwD/wX5t+jqwrT3TgAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACZElEQVR4AcXBgW3rOBRE0TuOC1EqIVUZ51VilUJ2sqnkreTvAIqh5C9sB3uObCcvYFs84MyqtcaeJGzTWmNPErZprbEniUeduYkIjkQERyKCVzixY5sjtjlim2ed2LHNEdscsc2zzqwkcUQSRyTxKmdWmcmeJDaZyZ4kNpnJniQedeYmIjgSERyJCF7hxI5tjthmLyLY2OZZZ3Zsc8Q2m8xkM8ag945tnnVmJYkjkthrrbEppVBKISKwjW1WyR3b4i/OrDKTPUlsMpM9SWwyk01rjY1tMpMxBrVWMpMxBqsExA/eaq2utRIRjDEYY9B7p9ZKrZWIYIzBGIPeO7aZ5xnbbGqtSGKeZy6XC/M88/7+zuVyYZ5nlmUxEHzjxI5tjthmLzORxKfWGraRRCmF3juSKKXQe2eVfOPEjm2O2OaebSTxqbWGbSRRSqH3jiRKKfTeWSUHZDttc882trlnG9t8sk1rjZ+MMai1shJ3zqwykz1JbDKTjSQyk4jANpnJp4jgGWduIoIjEcFmjEFrjY0kbPMKJ3Zs851aK2MMWmvYxja2sc0zzuzY5ohtNrVWeu+01mit8QpnVpI4Iol7tVZ675RSeAXxmOy9U0rhvxhjUGtlJe688ZhYlsXzPDNNE38zTRPzPDMtiyu4Q3DzxuNiWRZHBPM8M00TP/n4+OCfZaEBAQaClXiN5Kb3TimFeyHR+CMAcyXxetl7p5TCp5BofBWAgTdeL5Zl8TzPTNNESDS+CsBcSfwSQ7JqfBWAuRKrE7+o8VUA5krcvPFLOoTAlT8CMFdiR/wyQ7IyV+J/knzjX7iWFfpK7PVmAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfElEQVR4Ae3B0XFbVwxF0X1s93WhTtTJPajE6oRAZQifJSYUxzJpJzP50Vp8+vTp06f/m8DDOxYPshlu2IjfIPBwxeYu27KZvQcQ1zL5m4244xs3IoIHzN4DCBiu7S2uDGc24gMCD1dmNvd0NxHBzJApwNimqlhr8Q9xyOQHG3HjK4S5Yge/Ionv379jG0lEmL03UvL8/IKURCSZ4umpsIeIJGKQ0hG4iuTNFx4kicPMIInDzGAbENcyzd4bGyQBA4i9h73BZnjzFcJcsYOfsY0kbGMbSdjGNlJyOoEENlQVdtINVSAlEQMIGCISCVeRX7ghiVuSOMwMkriQxGFmkGBvmBlmoLu4lilgAAFDRHE2Aob3BAxvZoaDJGYGSRxmBhASzAwHSdiwN28GEBLYsDdnQ3dTFdgg7pszJHGoKtZagIAhM7HNxcxwyBR7czZIwoa9h+6mKjjYIB4zNkQUay1AZIINM8MhM9nbZIINM5wNICR+mIHuoiqw+eErD7BxRLHWAgQM3eJ0KjKTp6fkdDoBplucTgUMILqLl5cXZobM5Pn5hSqwTVXxjTtsZu/hlcgEW8wMsIFkxmQKG2zOBhDdRVVwsTdEFFXBhbjDZvaG7mKtxSuRCTbMDIfMZG8DA4juoiq4sGEGuouqwOYgcYfNRBRrBd3FWgEMr0Qm2GDD3gOI7qIquGVzS+IOm9kbuou1gu5iraC7WGvxSlx0F1XBr9hcSDxmOKsq1gq6i7WC7mKtAIZDd1MVfMTmQrwRv2c4m4HuYq2gu1gr6C6qgp+xuRA3xJ8ZzqqKtYLuYq0gk3dsLsQHxL8znM1Ad1EVHGwuxB3ivzG8Jx70FzzWb8/V5VanAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB6ElEQVR4AcXBgXGrSBRE0TssgZDJvFCcCU0mDqVfJnYks7DF1Oe7kITkrdI5hRdIavwgqfCCkSdJahHBiQYUnjTyglor/5eRF2UmG9v8xsCbDbzZwJsNvNnAmw282cCbDbzZwBMkNVbLsnBGUuNJhQskNVYRwSYi+Mk2G9t0kgoPFO6Q1FhFBEe2meeZzMQ2krDNT7bpJBVOjJyQ1FhFBL8REXSSGjtJhd0/HEhqEaGIYJomzthmExF8f3/z9fWFbT4/P/n4+OCWaZqYpolpmpimSbYXVgM7SS0iiAhusc08z5yRRETQOQJHcEdjNbKS1CKCq+Z5ppRCJ4kjRxA2NYISgW1uKZLaPM9sMpNHbDPPM5vMZGMbSdhmYxsk/iMREWxs00liVUYOaq10mcmZiGBZFjaS6GzTRQTYdLa5ZWSVmWxqrXS1VrrM5Cgi2NjmHts8MnKQmXS1VrpaK11m8ohtrhq5ITPpaq10tVa6zOTINs8auSAz6WqtdLVWumVZeMXIyjabiOCRzKSrtbJZloWrJLErrEZWkthIoosIHslMbHOFJHaFg8LfGjtJdBHBLba5RxK7wonCbY2dJLqI4Mg2ZySxK9xRuKaxk0QXEdjmSBK7wgWF5zV2kugksSs8ofA7jT8KL/gX3uTg+E/t5QMAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABnUlEQVR4AcXBC27rSAwAwaaQe3Fupj4a52RcBbABPa3tyHY+VcET1OYBNXhS8AW1uRhjkJncMuekqrhSgxOCO9RmM8YgM3nGnJOq4pMaPBDcoPYYg8zkHXNOqgo1uCM4UHtdV+6ZczJGslc1yUzuiQg2wQ0LO2qv68ojYyRHYySPdDeb5oaFC7XXdeWndDeb5mBho/YYgzOqJkdVkzOqik2z88FFZnJGZtLNQXJGZvJJbTXYLGqPMfgtVYWK2mw+2GQmZ0RwVzenZCZ7C0/ohm6+jdoLf2zhjy38sYXNnJPfMudkb1GjqvgtYwxUrhYu5pz8tDknR8GF2uu68kgEX+rmrohA5UqN4F+94SdEBCp7agT/1xu+U0SgsqcGm+C2rioyk3fMORljoLKnBhfBfc2mqshMnjHnZIzBJ5U9NdgJHlBb5aqqyExumXMyxuBK5UgNDoIvqM2FylVVkZlcRQQq96jBDcFJarOj0t1cRQQqR2rwwAcnqcGF2jygBictvEANIDa8a+E9seEdC++LDa9a+B6h8oqFb6IGL/gPC1nJrKDhY30AAAAASUVORK5CYII='
];

const emojis = ['🎲', '🏠', '🐩', '💾', '🚾', '📁', '💭'];

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.material};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  img {
    width: 48px;
    height: 48px;
    image-rendering: pixelated;
  }
  span {
    display: inline-block;
    font-size: 48px;
    line-height: 48px;
  }
`;

export default {
  title: 'Other/IconWrapper',
  component: IconWrapper,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof IconWrapper>;

export function Default() {
  return (
    <div>
      <Row>
        {icons.map((icon, i) => (
          <IconWrapper key={i}>
            <img src={icon} alt='icon' />
          </IconWrapper>
        ))}
      </Row>
      <Row>
        {icons.map((icon, i) => (
          <IconWrapper key={i} disabled>
            <img src={icon} alt='icon' />
          </IconWrapper>
        ))}
      </Row>
      <Row>
        {emojis.map((emoji, i) => (
          <IconWrapper key={i}>
            <span>{emoji}</span>
          </IconWrapper>
        ))}
      </Row>
      <Row>
        {emojis.map((emoji, i) => (
          <IconWrapper key={i} disabled>
            <span>{emoji}</span>
          </IconWrapper>
        ))}
      </Row>
    </div>
  );
}

Default.story = {
  name: 'default'
};
