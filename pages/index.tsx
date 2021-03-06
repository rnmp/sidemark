import Head from 'next/head'

const TITLE = 'Cocoa barks “hello”'

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>

      <main className="p-6 text-center">
        <img
          className="mx-auto"
          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMUExQTFBIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik00MiwyMGMwLjEsMC4yLDAuMywwLjMsMC40LDAuNWMwLjIsMC4yLDAuNSwwLjIsMC43LDAuMWMwLjYtMC4yLDEuMi0wLjIsMS43LTAuOGMxLjItMS4xLDAuMi0xLjUtMS0xLjggICBjLTAuMiwwLTAuMy0wLjEtMC41LTAuMmMtMC43LTAuMi0xLjUtMC40LTEuOCwwLjJDNDEuNiwxOC43LDQxLjcsMTkuNCw0MiwyMEM0MiwyMCw0MiwyMCw0MiwyMHoiPjwvcGF0aD48cGF0aCBkPSJNNzYuOSwyNC42YzAuMy0wLjEsMC43LDAuMSwwLjgsMC40YzAsMC4xLDAuMSwwLjIsMC4xLDAuM2MzLjIsMy4xLDEwLjMsMS4zLDE0LjEtMS4xYzIuNC0xLjUsNC4zLTMuOCw1LjUtNi4zICAgYzEtMi4xLDEuMy0zLjcsMS00LjZjLTAuMS0wLjQtMC40LTAuNi0wLjgtMC43Yy0xLjktMC43LTQuMSwxLjQtNS44LDNjLTAuNCwwLjQtMC45LDAuOC0xLjIsMS4xYy0yLjksMi40LTUuOSwzLjktOC43LDQuNSAgIGMtMi45LDAuNi01LjEtMC4yLTcuNS0xYy0wLjgtMC4zLTEuNS0wLjUtMi40LTAuOGMtMy4zLTEtNi4xLTAuNS05LjYsMC43Yy01LjMsMS43LTExLjIsMC43LTE2LTAuNmMtMC41LDEuMS0xLjYsMi0yLjgsMi4yICAgYzEuNCwxLjYsMy41LDIuNiw1LjIsMy4xYzMuMywxLjEsNywyLDExLjUsM2MwLjEsMCwwLjIsMCwwLjMsMC4xbDAuOCwwLjJjMC4zLDAuMSwwLjUsMC4zLDAuNSwwLjVjMC4yLDAsMC4zLDAsMC40LDAgICBjMC4yLDAsMC40LDAuMSwwLjUsMC4xYzAuMS0wLjEsMC40LTAuMiwwLjYtMC4ybDAuOCwwLjJjMC4yLDAuMSwwLjQsMC4yLDAuNSwwLjVjMC4xLDAuMiwwLDAuNS0wLjIsMC43Yy0zLjQsMi44LTYuNiw0LjctOS45LDUuOSAgIGMtMC4xLDAtMC4yLDAuMS0wLjQsMC4xYy0wLjksMC40LTIuOCwxLTQuMiwxLjJjMi4xLDEuMyw1LjQsMC41LDcuOS0wLjJjMi0wLjUsMy45LTEuMiw1LjgtMS44bDAuOC0wLjNjMS4yLTAuNCwzLjEtMSw0LjQsMCAgIGMwLTIuNC0wLjItNC40LTAuNy02LjJjLTAuMS0wLjMsMC4xLTAuNywwLjQtMC44YzAuMy0wLjEsMC43LDAuMSwwLjgsMC40YzAuNywyLjIsMC45LDQuNywwLjcsNy43Yy0wLjEsMS43LTAuMywzLjUtMC41LDUuMiAgIGMtMC4xLDAuOC0wLjIsMS43LTAuMywyLjVjLTAuMiwxLjUtMC4yLDIuOS0wLjIsNC4xYzAsMC43LDAsMS45LDAuMywzLjNjMC4yLDEuMiwwLjUsMi4yLDEsM2MwLjgsMS42LDIsMi4yLDMuNiwxLjkgICBjMi4xLTAuNCwyLjQtMy40LDIuNC01LjdjMC4xLTQtMC43LTgtMS41LTExLjhsMC0wLjJjLTAuNy0zLjEtMS40LTYuMy0yLjYtOS4yYy0wLjEtMC4zLDAtMC43LDAuNC0wLjljMC4zLTAuMSwwLjcsMCwwLjksMC40ICAgYzEuMiwzLDEuOSw2LjIsMi42LDkuNGwwLDAuMkM3Ny4yLDQxLjksNzgsNDYsNzgsNTAuMmMwLDEuNy0wLjEsNi40LTMuNSw3Yy0wLjMsMC4xLTAuNiwwLjEtMC45LDAuMWMtMS40LDAtMi41LTAuNi0zLjQtMS43ICAgYy0wLjYsMy4yLTQuMyw1LjQtNi41LDYuMmMtMS43LDAuNi0zLjQsMC45LTUuMSwwLjljLTEuOCwwLTMuNS0wLjQtNS4yLTEuMWMtNC43LTIuMS05LTQuMy0xMi44LTYuN2MtMS41LTAuOS0yLjctMi4yLTMuOS0zLjQgICBjLTAuOS0wLjktMS43LTEuNy0yLjctMi41Yy0yLjQtMS45LTUuNC0yLjMtOC41LTIuN2MtMS4yLTAuMS0xLjctMC4zLTEuNy0xLjVjMC0wLjEsMC0wLjMsMC0wLjRjLTAuMS0wLjYtMC4xLTEuMy0wLjMtMiAgIGMtMC4zLTEuMS0wLjktMi4xLTItMy4yYy0yLjEtMi4xLTUuMi0zLjUtOC41LTMuOGMtMy4yLTAuMy03LjcsMC41LTEwLDIuN0MyLDM4LjksMS41LDM5LjksMS4zLDQxYzAuNC0wLjMsMS0wLjcsMS4yLTAuOCAgIEMyLjcsNDAsMi45LDM5LjksMywzOS44bDAuNi0wLjRjMS0wLjYsMi0xLjMsMy4zLTEuN2MzLjEtMSw2LjIsMC4xLDguNCwyLjhjMS44LDIuMywzLjQsNS43LDIuNCw4LjRjLTAuMywwLjctMC42LDEuNC0wLjgsMiAgIGMtMC45LDItMS42LDMuNS0wLjUsNS44YzAuMSwwLjMsMC4xLDAuNi0wLjIsMC44YzAsMCwwLDAuMSwwLDAuMWMtMS40LDIuNi0xLjksNS40LTEuNCw4YzAuMSwwLjYsMC4zLDEuMiwwLjUsMS45ICAgYzAuNiwxLjksMS4yLDQsMC40LDZjLTAuMywwLjctMC44LDEuMy0xLjIsMS45Yy0wLjcsMC45LTEuMywxLjctMS4yLDIuOGMwLjEsMC44LDAuOSwyLjIsMS44LDIuNmMwLjQsMC4yLDAuNywwLjEsMS0wLjEgICBjMC40LTAuMywwLjQtMS4xLDAuNS0xLjljMC0wLjcsMC4xLTEuNSwwLjQtMi4xYzAuOC0xLjUsMi40LTEuOSwzLjgtMi4xYzAuNi0wLjEsMS4xLTAuMiwxLjYtMC40YzEuMS0wLjUsMi4xLTEuMywyLjctMi40ICAgYzEuMy0yLjIsMS4yLTUuMi0wLjItNy41Yy0wLjItMC4zLTAuMS0wLjcsMC4yLTAuOWMwLjMtMC4yLDAuNy0wLjEsMC45LDAuMmMxLjUsMi41LDEuNyw1LjcsMC41LDguM2MwLDAsMC4xLDAsMC4xLDAuMSAgIEMzOS4zLDgyLjksNTcuNiw4Ny4zLDcyLjIsODNjNi42LTEuOSwxNS4zLTYuNiwxOC43LTE3LjZjMC40LTEuMiwwLjctMi41LDAuOS0zLjdjMC4xLTAuNCwwLjQtMC42LDAuOC0wLjUgICBjMC40LDAuMSwwLjYsMC40LDAuNSwwLjhjLTAuMiwxLjItMC41LDIuMy0wLjgsMy41YzAuMSwwLjEsMC4xLDAuMiwwLjEsMC40Yy0wLjIsMS0wLjEsMi42LDAuNiwzLjVjMC4zLDAuNSwwLjcsMC43LDEuMiwwLjggICBjMC43LDAuMSwxLjMtMC4xLDEuOC0wLjZjMC43LTAuOCwxLTIuMiwwLjctMy4yYy0wLjEtMC41LTAuNS0wLjktMC44LTEuNGMtMC40LTAuNS0wLjgtMS0xLTEuOGMtMC4zLTEtMC4yLTIsMC0yLjkgICBjMC4xLTAuNSwwLjEtMC45LDAuMS0xLjNjMC4xLTMuNC0xLjEtNi45LTIuNC0xMC4xYy0wLjEtMC4xLTAuMi0wLjItMC4zLTAuNGMtMS00LjQtMy4zLTguNy02LjgtMTIuM2MtMC43LTAuNy0xLjUtMS41LTIuMi0yLjIgICBjLTIuNS0yLjQtNS00LjgtNi40LThjLTAuMS0wLjEtMC4yLTAuMy0wLjQtMC40Yy0wLjItMC4zLTAuMi0wLjcsMC4xLTAuOUM3Ni42LDI0LjYsNzYuOCwyNC42LDc2LjksMjQuNnogTTY1LjYsMjMuOSAgIGMtMS0wLjEtMS4yLTEuMi0wLjUtMS45QzY2LjgsMjAuNCw2Ny43LDI0LjIsNjUuNiwyMy45eiI+PC9wYXRoPjwvZz48L3N2Zz4="
        />
        <h1 className="font-serif text-6xl">{TITLE}</h1>
        <p className="text-red-600">
          Icon by{' '}
          <a href="https://thenounproject.com/iconka/" target="_blank" rel="noreferrer">
            Denis Sazhin
          </a>
        </p>
      </main>
    </>
  )
}
